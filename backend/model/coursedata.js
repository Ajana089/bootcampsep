const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://ajana:WXEfL58SV4RttU1P@cluster0.skibkhl.mongodb.net/CoursesDB?retryWrites=true&w=majority');
const CourseSchema=mongoose.Schema({
    title:String,
    description:String,
    duration:String,
    date:String,
    venue:String
})

var CourseData=mongoose.model('courseset',CourseSchema);

module.exports=CourseData;