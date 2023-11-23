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

exports.getLatestRecipe = (req, res) => {
     Recipe.find().sort({ _id: -1 }).limit(2)
     .then(recipes => {
        res.status(200).json({
            recipes: recipes.map((recipe) => ({
                title: recipe.title,
                imageId: recipe.imageId
            })),
        });
        console.log("fetch Latest recipes");
     })
     .catch((err) => {
        console.log(err);
     })
}
