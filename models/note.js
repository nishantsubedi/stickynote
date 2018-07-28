var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema({
    _id: Schema.Types.ObjectId,

    title: {
        type: String
    },
    body: {
        type: String
    },
    updated: {
         type: Date, default: Date.now 
    }

});

var Note =mongoose.model('Note', noteSchema);

module.exports = Note;d