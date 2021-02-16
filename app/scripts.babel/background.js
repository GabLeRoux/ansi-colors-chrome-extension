'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.onClicked.addListener(tab => {
  console.log('Colorizing ansi for ' + tab.url);
  chrome.tabs.executeScript({
    file: 'scripts/colorize.js'
  });
});
