var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RectangleSchema = new Schema({
	x: Number,
	y: Number,
	color: String, 
	stroke: String,
	width: Number,
	height: Number
});

var Rectangle = mongoose.model('Rectangle', RectangleSchema);

module.exports = Rectangle;