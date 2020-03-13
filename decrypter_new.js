const crypto = require('crypto'), fs = require('fs');
const x = crypto.publicDecrypt(fs.readFileSync('./key'), fs.readFileSync('./enc_result'));
fs.writeFileSync('./sec_enc_res', x);