const express = require('express')
const routerUrl = require('./Router/url')
const {connectToMonDb} = require('./connect')
const URL = require('./Models/url')
const Path = require('path')
const staticRouter = require('./Router/staticRouter')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const PORT = 8001
connectToMonDb('mongodb://127.0.0.1:27017/short-url')

app.use('/url',routerUrl)
app.set('view engine','ejs')
app.set('views',Path.resolve('./Views'))
app.use('/',staticRouter)

app.get('/url/:shortId',async (req,res)=>{
    const shortId = req.params.shortId
    const entry =  await URL.findOneAndUpdate({
        shortId
    },{
        $push:{
            visitHistory:{
                timeStamp : Date.now()
            }
        }
    })
    
    res.redirect(entry.redirectUrl)

})


app.listen(PORT,()=>{
    console.log(`Serever Running on http://localhost:${PORT}/`);
})