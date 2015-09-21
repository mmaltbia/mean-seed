var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Wireframe = require('./wireframes');


var ProjectSchema = new Schema({
	title: String,
	description: String, 
	wireframes: [Wireframe.schema]
});

var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;