const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const postRoutes=require('../backend/routes/post');
const CategoryRoutes=require("./routes/Category");
const bodyParser=require("body-parser");

const app=express();

const PORT=8000;
app.use(bodyParser.json());
app.use(cors());



// connect MongoDB
mongoose.connect('mongodb://localhost:27017/blog',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("MongoDB is Connected..")
}).catch(err=>console.log("DB ERROR:",err))

//use routes

app.use('/api/posts',postRoutes)
app.use('/api/categories',CategoryRoutes)
app.listen(PORT,()=>console.log(`The Server is Starting at localhost:${PORT}`));

 
