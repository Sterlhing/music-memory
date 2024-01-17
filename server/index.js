const spotify = require('./spotify')
const express = require('express')
const app = express()
const port = 3000

// routes
app.get('/api/new-releases', (req, res) => {
  spotify.getNewReleases()
    .then(body => res.send(body))

})

app.listen(port, () => {
  console.log(`🎶 music memory listening on port ${port}`)
})