const mongoose = require('mongoose');
const {Schema} = mongoose;

const calenderSchema = new Schema({
    round:{
        type : Number,
        required : true
    },
    gpName:{
        type: String,
        required:true
    },
    country:{
        type: String,
        required : true
    },
    date:{
        type : String,
        required: true
    },
    trackImg : {
        data : Buffer,
        contentType : String
    }
})

const calenderModel  = mongoose.model('calenderModel', calenderSchema);

module.exports = calenderModel;

