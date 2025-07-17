//Demonstrate “path” core module in NodeJS. (A)

const path  = require('path');
console.log(path.normalize('D:\New folder\SEM-3'));
console.log(path.extname('index.html'));
console.log(path.dirname('D:\New folder\SEM-3'));
console.log(path.basename('D:\New folder\SEM-3','D:\New folder\SEM-1'));