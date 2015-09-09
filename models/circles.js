var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CircleSchema = new Schema({
	id: Number,
	x: Number,
	y: Number,
	color: String, 
	stroke: String,
	width: Number,
	height: Number,
	borderRadius: Number
});

var Circle = mongoose.model('Circle', CircleSchema);

module.exports = Circle;
