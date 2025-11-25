const express = require('express');
const path = require('path');
const router = express.Router();



router.use(express.static(path.join(__dirname, '../public')));
// Serve homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/data-structures', (req, res) => {
    res.sendFile(path.join(__dirname, '../pdfs/data-structures.pdf'));
});

router.get('/operating-systems', (req, res) => {
    res.sendFile(path.join(__dirname, '../pdfs/operating-systems.pdf'));
});
router.get('/computer-networks', (req, res) => {
    res.sendFile(path.join(__dirname, '../pdfs/computer-networks.pdf'));
});
// 404 handler for unknown routes
router.use((req, res) => {
    res.status(404).send('Page not found');
});

module.exports = router;
