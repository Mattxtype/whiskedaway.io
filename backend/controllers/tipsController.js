const Tip = require("../models/tips");
const { randomNumber } = require("../services/tipService");

exports.postAddTip = (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const tip = new Tip({
    title: title,
    //Todo add relation to content Schema
    description: description,
  });
  tip
    .save()
    .then((result) => {
      console.log("saved tip");
      res.end("done");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getRandomTip = (req, res) => {
  Tip.countDocuments()
    .then((count) => {
      Tip.find({})
        .skip(randomNumber(count))
        .limit(1)
        .then((tip) => {
          console.log(tip);
          res.status(200).json({
            tip: {
              title: tip[0].title,
              description: tip[0].description,
            },
          });
        })
        .catch((err) => {
          console.log("could not retrieve tip" + err);
        });
    })
    .catch((err) => {
      console.log("could not count Documents" + err);
    });
};
