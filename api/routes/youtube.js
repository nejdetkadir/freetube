const { Router } = require('express')
const ytdl = require('ytdl-core');

const router = Router()

// Youtube route
router.post('/youtube', (req, res) => {
  const validation = ytdl.validateURL(req.body.url)
  const result = null
  res.json({
    validation,
     result
  })
})

module.exports = router