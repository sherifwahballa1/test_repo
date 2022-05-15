const express = require('express');

const app = express();

console.warn('welcome from main page');

console.error('welcome from main page');

console.log('welcome from main page');

function sub() {
    return 10 - 6;
}
function sum() {
    return 5 + 5;
}

module.exports = app;