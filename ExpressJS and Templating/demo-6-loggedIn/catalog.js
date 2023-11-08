const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/catalog.html');
})


router.get('/:id', (req, res) => {
    console.log(req.params);
    res.send('Product page');
})

router.get('/:id/details', (req, res) => {
    res.send('Details page');
})
router.get('/:category/:id', (req, res) => {
    res.send('Category page');
})

module.exports = router;