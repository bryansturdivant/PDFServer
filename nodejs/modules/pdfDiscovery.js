//pdf discovery module for finding pdfs in the '/pdfs' folder 

const path = require('path');
const fs = require('fs');//nodes built in file system module - lets me read, write, and generally ahve access to files functions

const pdfDir = path.join(__dirname, '..', 'pdfs'); //sets a path directory to the pdfs folder 

let cachedList = null; //sets cachedList to empty 

function getPDFList(useCache = true){
    if(useCache && cachedList){
        return cachedList;//if cachedlist exists, just return it 
    }

    const files = fs.readdirSync(pdfDir).filter(f => f.endsWith('.pdf')); //Updates files to all available pdf files with a cool lambda filter function
    cachedList = files;
    return files;

}

module.exports = {getPDFList, pdfDir};