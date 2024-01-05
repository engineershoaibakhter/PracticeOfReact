const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send({ message: "Contact US page" });
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    res.send({ message: `Get a ${id} page` });
});

router.post('/', (req, res, next) => {
    res.send({ message: "Post a contact us page" });
});

module.exports = router;
