//Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using http core module

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile("D:\\New folder\\SEM-3\\WEB TECHNOLOGY\\LAB Manual\\LAB-5\\formValidation.html" , (err,data)=> {
        res.end(data.toString());
    });
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:");
});