const Recipe = require("../models/recipes");

exports.postAddRecipe = (req, res, next) => {
  const title = req.body.title;
  const imageId = req.body.imageId;
  const recipe = new Recipe({
    title: title,
    //Todo add relation to content Schema
    imageId: imageId,
  });
  recipe
    .save()
    .then((result) => {
      console.log("saved recipe");
      res.end("done");
    })
    .catch((err) => {
      console.log(err);
    });
};
