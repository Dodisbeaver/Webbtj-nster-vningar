const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030
const mongoose = require('mongoose')

require('dotenv').config()
mongoose.connect(process.env.DB_URL)

console.log(process.env.DB_URL)
app.get('/', (req, res) => {
    res.send({msg: 'hello'})
})

const notesRouter = require('./routes/notes')
app.use('/notes', notesRouter);
console.log("Hello world");
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})