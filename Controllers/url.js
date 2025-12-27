const {nanoid}= require('nanoid')
const URL = require('../Models/url')

async function handleGenrateNewShortUrl(req,res){
    const body = req.body
    if(!body)res.status(400).json({error:"Url is required"})
    const shortID = nanoid(8)
    await URL.create({
        shortId :shortID,
        redirectUrl:body.url,
        visitedHistory:[],

    })
    return res.json({id:shortID})
}
module.exports = {handleGenrateNewShortUrl}