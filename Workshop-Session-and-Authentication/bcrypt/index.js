const bcrypt = require('bcrypt');

const pass1 = '12345';

async function start(){

    const hash = await bcrypt.hash(pass1, 10);
    console.log(hash);
}

start();