require('dotenv').config()
const express = require('express')
const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World 3!')
})

app.get('/twitter', (req, res) => {
    res.send('baladotcom')
})

app.get('/youtube', (req,res) => {
   res.send('welcome to youtube')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


//lecture no - 02 - 24:20


