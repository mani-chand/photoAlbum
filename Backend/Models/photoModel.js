const mongoose = require('mongoose')
const photoAlbum=new mongoose.Schema({
    message:{type:String},
    image:{type:String}
})
const res=new mongoose.model('photo',photoAlbum)
module.exports = res;