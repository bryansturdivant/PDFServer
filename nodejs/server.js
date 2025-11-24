const express = require('express');
const path = require('path');
const app = express();
const PORT = 1991;

// Serve static assets (CSS, JS, images) from /public
app.use('/static', express.static(path.join(__dirname, 'public')));

// Routing
const routing = require('./routes/auth');
app.use('/', routing);

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at Port ${PORT}`);
});
