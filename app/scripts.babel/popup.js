// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

console.log('ansi-colors popup');

function stripAnsi(e) {
  e.preventDefault();
  chrome.tabs.executeScript({
    file: 'scripts/strip.js'
  });
}

function convertToHtml(e) {
  e.preventDefault();
  chrome.tabs.executeScript({
    file: 'scripts/colorize.js'
  });
}

document.getElementById('strip-ansi').addEventListener('click', stripAnsi);
document.getElementById('convert-to-html').addEventListener('click', convertToHtml);
