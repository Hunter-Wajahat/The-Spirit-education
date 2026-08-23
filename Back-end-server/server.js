require('dotenv').config();
const express = require('express');
const app = express()
const port = 3000
const connectDB = require('./models/db');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const userRoutes = require('./routes/routers');
const multer = require("multer");
const path = require("path");

connectDB()

app.use(cors({
  origin: process.env.frontend_server, // My frontend
  credentials: true               // allow sending cookies
}));

app.use("/uploads", express.static("uploads"));
app.use(express.json({ limit: "10mb" })); // allow up to 10 MB
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());
app.use(cookieParser())
app.use('/api', userRoutes)

app.get('/', (req, res) => {
  res.json('we are listening...')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})