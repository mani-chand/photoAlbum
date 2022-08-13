const photoModel=require('./../Models/photoModel.js');
//const mongoose = require('mongoose')
const createImage=async (req,res,next)=>{
    const {message,image}=req.body;
    const newPhoto={
        message,
        image
    }
   const result=await photoModel(newPhoto).save()
   res.send(result.toObject({getters:true}))
}
const getPhotos=async (req,res,next)=>{
  const result = await photoModel.find().exec()
  res.send(result)
}
exports.createImage=createImage
exports.getPhotos=getPhotos