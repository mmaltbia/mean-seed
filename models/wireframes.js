var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Rectangle = require('./rectangles'),
    Circle = require('./circles'),
    Line = require('./lines'),
    Image = require('./images')


var WireframeSchema = new Schema({
	title: String,
	description: String, 
	rectangles: [Rectangle.schema],
	circles: [Circle.schema],
	lines: [Line.schema],
	images: [Image.schema]
});

var Wireframe = mongoose.model('Wireframe', WireframeSchema);

module.exports = Wireframe;