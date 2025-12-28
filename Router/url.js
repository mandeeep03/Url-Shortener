const express = require('express')
const {
  handleGenrateNewShortUrl,
  handleGetAnalytics,
} = require("../Controllers/url");
const router = express.Router()

router.post("/", handleGenrateNewShortUrl);
router.get("/analytics/:shortId", handleGetAnalytics);
module.exports = router