Bryan Sturdivant
COS 498: Server Side Web Development
Troy Schotter
HW#3

For this homework assignment I set up a domain configuration through cloudflare, using the domain name: bsturdivant.com(or www.bsturivant.com). I set up SSL certificate using the nginx proxy manager. 

Front Facing website: CS Study Guides Library: Free downloadable academic PDFs

This is a PDF document managing app, that searches for PDFs in a the /pdf folder and serves them through the website. 

The auth.js file is my routing module, which serves all of the different urls. For the PDFs, it calls the pdfDiscovery module in pdfDiscovery.js which creates a list of available pdfs. The pdfValidation module in pdfValidation.js checks each PDF to see if they are valid or not. If everything checks out, the PDFs are served via the website. 

I used .json files for the metadata. I just used a title and description, and used that metadata to show on the actual website so everything looks nice. 