'use strict';

var Convert = require('ansi-to-html');
var convert = new Convert();

console.log('About to convert ANSI characters to html!');
document.body.innerText = convert.toHtml(document.body.textContent);
console.log('Done!');
