const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipSchema = new Schema ({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Tip', tipSchema);