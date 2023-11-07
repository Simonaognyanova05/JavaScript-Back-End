const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/catalog.html');
});

router.get('/:id', (req, res) => {
    res.sendFile(__dirname + '/product.html');
})

module.exports = router;