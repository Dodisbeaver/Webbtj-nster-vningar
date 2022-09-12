const { response } = require('express');

express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    response.send('notes!');
})

module.exports = router;