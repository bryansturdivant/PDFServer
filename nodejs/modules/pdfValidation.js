//pdf validation module for making sure the files found in discovery are valid 
const path = require('path');
const fs = require('fs').promises;
async function validatePDF(filename){

    try{
        const pathName = path.join(__dirname, '../pdfs', filename);
        await fs.access(pathName);// a file system function that searches to see if the path name with this pdf exists
        return true;

    }
    catch (error){
        console.log(`Error: ${error}`); //If it can't find it, returns an fs error code
        return false;


    }

}

module.exports = {validatePDF}






