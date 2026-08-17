const express = require('express');
const app = express()
const port = 3000
const connectDB = require('./models/db')

connectDB()
app.get('/', (req, res) => {
  res.json('we are listening...')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})