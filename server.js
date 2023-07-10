const express = require('express')
const app = express()
const cors = require ('cors')
const port = 3000

app.use(cors('*'))
app.get('/', (req, res) => {
  res.send('My Node Application')
})

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})