const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const ReportSchema = new Schema({
    //each user has his/her own username
    longtitude:{
        type: Number,
        default:0,
        required:true
    },
    latitude:{
        type: Number,
        default:0,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    sender:{
        type:String,
        required:true
    },
    time : { 
        type: Number, default: (new Date()).getTime() 
    },
    src:{
        type: String
    }

   
    
})

const Report = mongoose.model('report', ReportSchema);
module.exports = Report;