const mongoose = require('mongoose')

async function connectToMonDb(url){
    return mongoose.connect(url)
}
module.exports = {connectToMonDb}