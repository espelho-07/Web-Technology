//Create a hello world webapp using “http” core module in NodeJS. 

const http = require('http');
const server = http.createServer((req,res)=>{
    res.end("Hello From Node JS");
});

server.listen(3000, ()=>{
    console.log('Server is running at htpps://127.0.0.1:3000/');
});

