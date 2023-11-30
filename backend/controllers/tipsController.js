const Tip = require("../models/tips");

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

