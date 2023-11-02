const fs = require('fs');
// const file = fs.readFileSync('./file.txt');
// console.log(file.toString());

fs.readFile('./file.txt', (err, data) => {
    console.log(data.toString());
});