//Demonstrate “fs” core module in NodeJS.

const fs = require('fs');
fs.exists('D:\New folder\SEM-1\Indian Constitution\UNIT 2' , (exists)=>{
    console.log(exists ? 'Found' : 'Not Found!');
});

fs.writeFile('example.txt', 'Hello,', (err) => {
  if (err) throw err;
  console.log('File created and content written!');
});

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});


fs.appendFile('example.txt', '\nHere’s some additional text.', (err) => {
  if (err) throw err;
  console.log('Content appended!');
});

fs.unlink('example.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});