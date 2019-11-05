const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/pony', (req, res) => {
  res.sendFile(`${__dirname}/public/pony.html`)
})

app.listen(4500, '0.0.0.0', () => {
    console.log("Express pony server started at http://0.0.0.0:4500")
})