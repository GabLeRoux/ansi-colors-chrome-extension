'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

/*chrome.tabs.onUpdated.addListener(tabId => {
  chrome.pageAction.show(tabId);
});*/

// executes colorize action on button click :)
chrome.browserAction.onClicked.addListener(tab => {
  // No tabs or host permissions needed!
  console.log('Colorizing ansi for ' + tab.url);
  chrome.tabs.executeScript({
    file: 'scripts/colorize.js'
  });
});
