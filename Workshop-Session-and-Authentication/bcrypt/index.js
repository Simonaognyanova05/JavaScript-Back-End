const bcrypt = require('bcrypt');

const pass1 = '123456';

async function crypting() {
    const hash = await bcrypt.hash(pass1, 10);
    return hash
}

async function start() {
    const cryptingFunc = await crypting();
    //console.log(cryptingFunc);
    const compared = await bcrypt.compare(pass1, cryptingFunc);
    console.log(compared);
}

start();