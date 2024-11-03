const express=require("express");
const mongoose=require("mongoose");
const postRoutes=require('../backend/routes/post')
const bodyParser=require("body-parser");

const app=express();

const PORT=8000;
app.use(bodyParser.json());



// connect MongoDB
mongoose.connect('mongodb://localhost:27017/blog',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("MongoDB is Connected..")
}).catch(err=>console.log("DB ERROR:",err))

//use routes

app.use('/api/posts',postRoutes)
app.listen(PORT,()=>console.log(`The Server is Starting at localhost:${PORT}`));

 
