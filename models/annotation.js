const mongoose = require('mongoose')

const annotationSchema = new mongoose.Schema({
    label:{
        type: String,
        required: true
    },
    x:{
        type: Number,
        required: true
    },
    y:{
        type: Number,
        required: true
    },
    width:{
        type: Number,
        required: true
    },
    height:{
        type: Number,
        required: true
    }
    
})

module.exports = mongoose.model('Annotation', annotationSchema)