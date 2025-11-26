
const routes = require('./auth');
const path = require('path');
const fs = require('fs').promises;

async function validatePDF(filename){


    try{
        const pathName = path.join(__dirname, '../pdfs', filename);
        await fs.access(pathName);
        return true;

    }
    catch (error){
        console.log(`Error: ${error}`);
        return false;


    }

}

module.exports = {validatePDF}






