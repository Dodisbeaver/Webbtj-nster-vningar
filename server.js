const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030
const fooRouter = require('./routes/foo')

const runAlways = (req, res, next) => {
    res.locals.myVariables = `Hello from runAlways`
    console.log(`A request was made to ${req.path}`) 
    next()
}
const runSometimes = (req, res, next) => {
    console.log(`A reque21410h2oasldkf madase toee ${req.path}`) 
    next()
}
//always runs this middleware
app.use(runAlways)

app.get('/', (req, res) => {
    res.send(`Express says hello ${res.locals.myVariables}`)
})

app.use('/foo', fooRouter)

app.get('/bar', runSometimes, (req, res) => {
    res.send('bar')
})

console.log("Hello world");

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})