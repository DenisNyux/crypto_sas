/*Нюхалов, Литовченко*/
const crypto = require('crypto');
const fs = require('fs');

const key = fs.readFileSync('./key');
const message = fs.readFileSync('./index.js');

const x = crypto.publicEncrypt(key, message);
console.log(x);
fs.writeFileSync('enc_result', x);