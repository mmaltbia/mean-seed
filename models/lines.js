var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LineSchema = new Schema({
	id: Number,
	x: Number,
	y: Number,
	color: String, 
	stroke: String,
	width: Number
});

var Line = mongoose.model('Line', LineSchema);

module.exports = Line;
