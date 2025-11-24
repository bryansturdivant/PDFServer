const express = require('express');
const path = require('path');
const router = express.Router();



router.use(express.static(path.join(__dirname, '../public')));
// Serve homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// 404 handler for unknown routes
router.use((req, res) => {
    res.status(404).send('Page not found');
});

module.exports = router;
