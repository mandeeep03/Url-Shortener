const express = require('express')
const routerUrl = require('./Router/url')
const {connectToMonDb} = require('./connect')

const app = express()
app.use(express.json())
const PORT = 8001
connectToMonDb('mongodb://127.0.0.1:27017/short-url')
app.use('/url',routerUrl)

app.listen(PORT,()=>{
    console.log(`Serever Running on http://localhost:${PORT}/`);
})