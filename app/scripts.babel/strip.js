'use strict';

// @see https://github.com/hughsk/ansi-html-stream
var ansi = require('ansi-html-stream');
var stripAnsi = require('strip-ansi');

console.log('About to strip ANSI characters!');
document.body.innerText = stripAnsi(document.body.textContent);
console.log('Done!');
