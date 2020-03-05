'use strict';
const luxon = require('luxon');

const   randomIt = function (min, max) {
     return Math.floor(Math.random() * (max-min + 1) + min);
};

const dateFormat = function (date) {
    // const dateObj = new Date(date);
    // const d = dateObj.getDate();
    // const m = dateObj.getMonth() + 1;
    // const y = dateObj.getFullYear();
    // return  `${d}.${m}.${y}`;

    const dateObj = luxon.DateTime.fromJSDate(date);
    return dateObj.toFormat('dd.MM.yyyy');

}

//module.exports.randomIt = randomIT;

module.exports = {
    randomIt,
    dateFormat
};