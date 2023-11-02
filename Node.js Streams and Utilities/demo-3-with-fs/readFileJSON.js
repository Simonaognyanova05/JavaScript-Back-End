const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./data.json'));
data.price++;

fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
