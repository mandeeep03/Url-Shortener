const express = require('express')
const routerUrl = require('./Router/url')
const {connectToMonDb} = require('./connect')
const URL = require('./Models/url')

const app = express()
app.use(express.json())
const PORT = 8001
connectToMonDb('mongodb://127.0.0.1:27017/short-url')
app.use('/url',routerUrl)

app.get('/:shortId',async (req,res)=>{
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