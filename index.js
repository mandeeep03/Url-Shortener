const express = require('express')


const app = express()
const PORT = 8001



app.listen(PORT,()=>{
    console.log(`Serever Running on http://localhost:${PORT}/`);
})