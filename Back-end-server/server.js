require('dotenv').config();
const express = require('express');
const app = express()
const port = 3000
const connectDB = require('./models/db');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const userRoutes = require('./routes/routers');

connectDB()

app.use(cors({
  origin: process.env.frontend_server, // My frontend
  credentials: true               // allow sending cookies
}));

app.use(express.json());
app.use(cookieParser())
app.use('/api', userRoutes)

app.get('/', (req, res) => {
  res.json('we are listening...')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})