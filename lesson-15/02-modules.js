'use strict';

const fs = require('fs');
const helpers = require('./helpers');

console.log(helpers);

const n = helpers.randomIt(10,20);
console.log(n);

console.log(helpers.dateFormat(new Date()));

// 1. Описать свой проект в файле package.json
// npm init -y

// 2. Установка  модулей
// npm i имя макета

console.log('test');