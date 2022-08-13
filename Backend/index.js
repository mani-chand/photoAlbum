const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const photoRoutes = require('./Router/photo-route.js')
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true},{urlencoded:true}))
const PORT=process.env.PORT | 5000
app.use('/api/photos',photoRoutes)
const URL='mongodb+srv://<uname>:<passwd>@cluster0.oll6q.mongodb.net/photo_album?retryWrites=true&w=majority'
mongoose.connect(URL)
.then(res=>{
    app.listen(PORT)
})
.catch(err=>{
    console.log(err)
})
