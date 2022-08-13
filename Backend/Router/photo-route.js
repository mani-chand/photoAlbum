const express=require('express')
const router=express()
const Image=require('./../Controllers/photo.js')
router.get('/',Image.getPhotos)
router.post('/',Image.createImage)
module.exports = router;