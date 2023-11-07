const { Router } = require('express');

const router = Router();

router.get('/create', (req, res) => {
    res.sendFile(__dirname + '/create.html');
}) 

router.post('/create', (req, res) => {
    res.send('Your post request is success');
})

module.exports = router;