/*
Title: Lab 1 - Exercise 01
Description: Nodejs Synchronous File APIs
Name: Andrew Medrano
Date: 9/4/23
Section: IT-207-001
*/
const path = require('path')

console.log(__dirname);
console.log(__filename);

const dir = __dirname.split(path.sep);
console.log(dir);

for (let i = 0 ; i < ProcessingInstruction.argv.length; i++) {
    console.log("index"+ i + ':' + ProcessingInstruction.argv[i]);
}