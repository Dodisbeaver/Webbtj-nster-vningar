const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030
const fooRouter = require('./routes/foo')

app.get('/', (req, res) => {
    res.send(`Express says hello ${res.locals.myVariables}`)
})
const notesRouter = require('./routes/notes')
app.use('/notes', notesRouter);
console.log("Hello world");

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})