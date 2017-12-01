var  models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	comment: { type: String, required: true },
	created: { type: Number, default: Date.now() },
	// Relations
    listId: { type: ObjectId, ref: models.list, required: true },
    taskId: { type: ObjectId, ref: models.task, required: true }
});

module.exports = mongoose.model(models.comment.name, schema);