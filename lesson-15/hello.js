'use strict';
const fs = require('fs');
const os = require('os');

const  rand = Math.floor(Math.random()*3);
let text = "";

if (rand===0) {
    text = 'Hello world';
} else if (rand===1) {
    text = 'Hey there';
} else if (rand===2) {
    text = "what's up?";
}

console.log(text);
const content = fs.readFileSync("./test.txt");
//fs.writeFileSync("./test.txt", content + "\n" + text);
const data = {text, createdAt: new Date()};
fs.writeFileSync('./test.txt', JSON.stringify(data));

fs.writeFileSync('./cpu-info.json', JSON.stringify(os.cpus()));

console.log(os.cpus());