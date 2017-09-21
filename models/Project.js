const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProjectSchema = new Schema({
    name:{
        es:{
            type: String,
            require: [true, 'Name in spanish is required']
        },
        en:{
            type: String,
            require: [true, 'Name in english is required']
        }
    },
    url: {
        type: String,
        required:[true, 'it is necessary to have a url of the project']
    },
    imageUrl:{
        type: String,
        required:[true, 'it is necessary to have a url of the image of the project']
    },
    description:{
        es:{
            type: String,
            require: [true, 'Description in spanish is required']
        },
        en:{
            type: String,
            require: [true, 'Description in english is required']
        }
    },
    technologies:[String]
});

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;
