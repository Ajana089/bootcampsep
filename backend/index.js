const express=require('express');
const cors=require('cors');
const CourseData=require('./model/coursedata')
const app=new express();
app.use(cors());
app.use(express.json())

app.post('/addcourse',function(req,res){

    var item=({
        title:req.body.title,
        date:req.body.date,
        venue:req.body.venue,
        duration:req.body.duration,
        description:req.body.description,
        
        
    })
    var data=CourseData(item);
    console.log(data);
    data.save();
    CourseData.find().then(function(data){
        res.send(data)
    })

})
app.get('/view',function(req,res){
    
    CourseData.find()
                .then(function(courses){
                    res.send(courses);
                });
});
app.listen(3000);