const mongoose=require('mongoose');
const categorySchema=new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    slug:{type:String,required:true,unique:true},
    description:{type:String,required:false},
},{
    timeStamps:true
});

module.exports=mongoose.model('category',categorySchema)