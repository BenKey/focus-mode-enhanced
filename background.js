// Copyright 2023 Ben Key
// Portions Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const StylesheetToSupportWebsitesJSON = {
  'css/focus-mode-Chrome-Developers.css': [
    'https://developer.chrome.com/docs/devtools',
    'https://developer.chrome.com/docs/extensions',
    'https://developer.chrome.com/docs/webstore',
    'https://developer.chrome.com/docs/workbox'
  ],
  'css/focus-mode-C++-reference.css': [
    'https://en.cppreference.com/'
  ],
  'css/focus-mode-CNET.css': [
    'https://www.cnet.com/'
  ],
  'css/focus-mode-Extension-Workshop.css': [
    'https://extensionworkshop.com/'
  ],
  'css/focus-mode-GitHub.css': [
    'https://github.com/'
  ],
  'css/focus-mode-HackADay.css': [
    'https://hackaday.com/'
  ],
  'css/focus-mode-jQuery.css': [
    'https://api.jquery.com'
  ],
  'css/focus-mode-MDN.css': [
    'https://developer.mozilla.org/en-US/docs/'
  ],
  'css/focus-mode-Microsoft-Developer-Blogs.css': [
    'https://devblogs.microsoft.com/'
  ],
  'css/focus-mode-Microsoft-Learn.css': [
    'https://learn.microsoft.com'
  ],
  'css/focus-mode-Quartz.css': [
    'https://qz.com/'
  ],
  'css/focus-mode-The-New-York-Times.css': [
    'https://www.nytimes.com/'
  ],
  'css/focus-mode-The-Register.css': [
    'https://www.theregister.com/'
  ],
  'css/focus-mode-The-Washington-Post.css': [
    'https://www.washingtonpost.com/'
  ],
  'css/focus-mode-TPGi.css': [
    'https://www.tpgi.com/'
  ]
};
const StylesheetToSupportWebsitesMap = new Map(Object.entries(StylesheetToSupportWebsitesJSON));

function IsInvalid(variable) {
  return (typeof(variable) === 'undefined' || variable == null);
}

function IsString(variable) {
  return (typeof(variable) === 'string' || variable instanceof String);
}

function StringIsNullOrEmpty(str) {
  if (IsInvalid(str)) {
    return true;
  }
  if (!IsString(str)) {
    return true;
  }
  if (str.length == 0) {
    return true;
  }
  if (str.trim() === '') {
    return true;
  }
  return false;
}

function GetStylesheet(url) {
  if (StringIsNullOrEmpty(url)) {
    return '';
  }
  let foundStylesheet = '';
  for (const [Stylesheet, Websites] of StylesheetToSupportWebsitesMap) {
    const filteredWebsites = Websites.filter(str => url.startsWith(str));
    if (filteredWebsites.length != 0) {
      foundStylesheet = Stylesheet;
      break;
    }
  }
  return foundStylesheet;
}

function IsSupportedWebsite(url) {
  const stylesheet = GetStylesheet(url);
  return !StringIsNullOrEmpty(stylesheet);
}

async function ChromeActionOnClicked(tab) {
  const methodName = 'ChromeActionOnClicked';
  const url = tab.url;
  const isSupported = IsSupportedWebsite(url);
  console.debug(`${methodName} Status: isSupported is ${isSupported}.`);
  if (!isSupported) {
    return;
  }
  const stylesheet = GetStylesheet(url);
  console.debug(`${methodName} Status: stylesheet is ${stylesheet}.`);
  /* We retrieve the action badge to check if the extension is 'ON' or 'OFF'. */
  const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
  /* Next state will always be the opposite. */
  const nextState = prevState === 'ON' ? 'OFF' : 'ON';
  /* Set the action badge to the next state. */
  await chrome.action.setBadgeText({
    tabId: tab.id,
    text: nextState
  });
  switch(nextState){
    case 'ON': {
      await chrome.scripting.insertCSS({
        files: [stylesheet],
        target: { tabId: tab.id }
      });
      break;
    }
    case 'OFF': {
      await chrome.scripting.removeCSS({
        files: [stylesheet],
        target: { tabId: tab.id }
      });
      break;
    }
  }
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: 'OFF'
  });
});

/* When the user clicks on the extension action. */
chrome.action.onClicked.addListener(ChromeActionOnClicked);
