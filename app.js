require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()

app.get('/' , (req, res) => {
    res.send('Hello Testing')
})

const port = process.env.PORT || 3000

app.listen(port , console.log(`Server is listening on prot ${port}...`))