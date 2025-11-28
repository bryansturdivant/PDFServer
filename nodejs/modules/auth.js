//This is my routing module 


const express = require('express');
const path = require('path');
const router = express.Router();
const pdfValidation = require('./pdfValidation');//the function we will be calling from pdfValidation.js
const pdfDiscovery = require('./pdfDiscovery');//function from pdfDiscovery



router.use(express.static(path.join(__dirname, '../public')));
// Serve homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


//API endpoint to get list of PDFs
router.get('/api/pdfs', (req, res) => {
    const pdfList = pdfDiscovery.getPDFList();
    res.json(pdfList);
});
//serving the pdfs 
router.get('/pdfs/:filename', async (req,res) => {
    const filename = req.params.filename;

    console.log(`Filename is: ${filename}`);
    


    const isValid = await pdfValidation.validatePDF(filename);

    if(isValid){
        res.sendFile(path.join(__dirname, '../pdfs', filename));
    }
    else{
        res.status(404).send("PDF is not Found")
    }

});
//404 error page
router.use((req, res) => {
    res.status(404).send('Page not found');
});

module.exports = router;
