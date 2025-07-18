//Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS

const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.url === '/home') {
        res.end("Hello From Node JS :)^_^(:\n");
    }
    if (req.url === '/about') {
        res.end(".Welcome to About Section of the SERVER ^_^ :)(: Hello From Node JS :)^_^(:\n");
    }
    if (req.url === '/darshan') {
        res.end("you Are Seeing World's One And Only University school ^_^ DARSHAN UNIVERSITY ^_^ :)(: ^_^ :)(: Hello From Node JS :)^_^(:\n");
    }
    if (req.url === '/contactus') {
        res.end("Welcome to Contact Section of the SERVER ^_^ :)(: Hello From Node JS :)^_^(: You can Call Us At ::9327532741 At Insta:: espelho_07 \n");
    }
    if (req.url === '/byee') {
        res.end("Welcome to Byee Section of the SERVER ^_^ :)(: Hello From Node JS :)^_^(: --NICE TO SEE YOU THANKS FOR REACHING US--  ^_^ \n");
    }
});

server.listen(3001, ()=>{
    console.log('Server is running at htpps://127.0.0.1:3000/');
});