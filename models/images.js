var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ImageSchema = new Schema({
	id: Number,
	x: Number,
	y: Number,
	color: String
});

var Image = mongoose.model('Image', ImageSchema);

module.exports = Image;