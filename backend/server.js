const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

// config 
app.use(cors())
app.use(express.json())

// connect to mongoDB
mongoose.connect('mongodb://localhost:27017/moivesDatabase',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)

// require route
app.use('/', require('./routes/movieRoute'))

app.listen(3001, () => {
  console.log('Server running on port 3001...');
})