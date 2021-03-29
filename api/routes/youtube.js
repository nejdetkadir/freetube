const { Router } = require('express')
const ytdl = require('ytdl-core');

const router = Router()

// Youtube route
router.post('/youtube', (req, res) => {
  const validation = ytdl.validateURL(req.body.url)
  if (validation) {
    ytdl.getInfo(req.body.url).then(result => {
      res.json({
        validation,
        result
      })
    }).catch(err => {
      res.json({
        validation
      })
    })
  } else {
    res.json({
      validation
    })
  }
})

module.exports = router