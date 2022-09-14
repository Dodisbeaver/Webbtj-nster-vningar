const { response } = require('express');

express = require('express');
const router = express.Router();
const notes = [
    {text: "Köp Mat"},
    {text: "Yo mama"}
]
router.get('/', (req, res) => {
    response.send(notes);
})
router.post('/', (req, res) => {
    notes.push(req.body);
    res.send(req.body)
})
module.exports = router;