const bcrypt = require('bcrypt');

const pass1 = '123456';
const hash = '$2b$10$ODLrBKhV.1qcExgA8dG.I.7ciwhBPgdHDyCxcAy.x/IU6eFY.leS2'

async function start(){
    //const hash = await bcrypt.hash(pass1, '$2b$10$ODLrBKhV.1qcExgA8dG.I.');
    console.log(await bcrypt.compare(pass1, hash));
}
start();