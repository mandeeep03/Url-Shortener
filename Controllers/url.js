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
async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId
    const result = await URL.findOne({shortId})
    if (!result) {
        return res.status(404).json({ error: "Short URL not found" });
    }
    return res.json({totalClicks:result.visitHistory.length,analytics:result.visitHistory})
}
module.exports = { handleGenrateNewShortUrl, handleGetAnalytics };