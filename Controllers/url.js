const {nanoid}= require('nanoid')
const URL = require('../Models/url')

async function handleGenrateNewShortUrl(req,res){
    const shortId = nanoid(8)
    await URL.create()
}