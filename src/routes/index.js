//routes
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs', { title: 'Noteit' });
});

module.exports = router;