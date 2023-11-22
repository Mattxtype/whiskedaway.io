const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema ({
    title: {
        type: String,
        require: true
    },
    imageId: {
        type: Number,
        require: true,
    }
})

module.exports = mongoose.model('Recipe', recipeSchema);