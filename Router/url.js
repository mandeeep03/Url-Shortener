const express = require('express')
const { handleGenrateNewShortUrl } = require("../Controllers/url");
const router = express.Router()

router.post("/", handleGenrateNewShortUrl);
module.exports = router