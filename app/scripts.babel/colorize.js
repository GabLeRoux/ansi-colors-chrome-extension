'use strict';

// this is executed at every page load, would be nice to detect ansi chars and colorize here ;)

// @see https://github.com/rburns/ansi-to-html
var AnsiConvert = require('ansi-to-html');
var ansiConvert = new AnsiConvert({
	newline: true
});

console.log('About to strip ANSI characters!');
document.body.innerHTML = "<pre>" + ansiConvert.toHtml(document.body.textContent) + "</pre>";
console.log('Done!');