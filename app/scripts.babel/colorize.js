'use strict';

// @see https://github.com/hughsk/ansi-html-stream
var ansi = require('ansi-html-stream');
var stripAnsi = require('strip-ansi');

var fs = require('fs');

var stream = ansi({chunked: false});

// todo: find a way to get document.body.textContent as stream
//console.log(document.body.textContent);

// todo: move this to a button or submenu, whatever. at least this works
document.body.innerText = stripAnsi(document.body.textContent);

// pip document to ansi stream
//documentAsStream = getDocumentAsStream();
//documentAsStream.pipe(stream);

// this should be the current page
var file = fs.createWriteStream('output.html', 'utf8');

stream.pipe(file, {end: false});
stream.once('end', function () {
  file.end('</pre>\n');
});
file.write('<pre>\n');


//documentAsStream.on('data', function (data) {
//    // not quite sure if I'll need to do something here
//    // I think pipe is the magic part here
//  })
//  .pipe(stream)
//  .on('close', function () {
//    console.log('stream is over');
//    stream.end(null)
//  });

