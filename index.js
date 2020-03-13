/*Нюхалов, Литовченко, Царулкова*/
const crypto = require('crypto'), fs = require('fs');
const x = crypto.publicDecrypt(fs.readFileSync('./key'), fs.readFileSync('./secret'));