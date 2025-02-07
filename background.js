/*
Copyright 2023 - 2025 Ben Key
Portions Copyright 2022 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

if (typeof browser == "undefined") {
  // Chrome does not support the browser namespace yet.
  globalThis.browser = chrome;
}

const StylesheetToSupportWebsitesJSON = {
  'css/focus-mode-Associated-Press-News.css': [
    'https://apnews.com/'
  ],
  'css/focus-mode-Audible.css': [
    'https://www.audible.com/'
  ],
  'css/focus-mode-Azure-DevOps.css': [
    'https://dev.azure.com/'
  ],
  'css/focus-mode-Boost.css': [
    'https://www.boost.org/'
  ],
  'css/focus-mode-Boston-Globe.css': [
    'https://www.bostonglobe.com/'
  ],
  'css/focus-mode-CBS-News.css': [
    'https://www.cbsnews.com/'
  ],
  'css/focus-mode-Chrome-Developers.css': [
    'https://developer.chrome.com/docs/devtools',
    'https://developer.chrome.com/docs/extensions',
    'https://developer.chrome.com/docs/webstore',
    'https://developer.chrome.com/docs/workbox'
  ],
  'css/focus-mode-Chrome-Developers-Blog.css': [
    'https://developer.chrome.com/blog/'
  ],
  'css/focus-mode-Code-Project.css': [
    'https://www.codeproject.com/'
  ],
  'css/focus-mode-CNN.css': [
    'https://www.cnn.com/'
  ],
  'css/focus-mode-EFF.css': [
    'https://www.eff.org/'
  ],
  'css/focus-mode-Gmail.css': [
    'https://mail.google.com/mail/'
  ],
  'css/focus-mode-AccuWeather.css': [
    'https://www.accuweather.com/en/us/'
  ],
  'css/focus-mode-Ars-Technica.css': [
    'https://arstechnica.com/'
  ],
  'css/focus-mode-C++-reference.css': [
    'https://en.cppreference.com/'
  ],
  'css/focus-mode-CNET.css': [
    'https://www.cnet.com/'
  ],
  'css/focus-mode-DEV-community.css': [
    'https://dev.to/'
  ],
  'css/focus-mode-Dictionary-And-Thesaurus.css': [
    'https://www.dictionary.com/',
    'https://www.thesaurus.com/'
  ],
  'css/focus-mode-Digg.css': [
    'https://digg.com/'
  ],
  'css/focus-mode-Extension-Workshop.css': [
    'https://extensionworkshop.com/'
  ],
  'css/focus-mode-Freedom-Scientific.css': [
    'https://www.freedomscientific.com/'
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
  'css/focus-mode-LGBTQ-Nation.css': [
    'https://www.lgbtqnation.com/'
  ],
  'css/focus-mode-MDN.css': [
    'https://developer.mozilla.org/en-US/docs/'
  ],
  'css/focus-mode-Medium.css': [
    'https://aninjusticemag.com/',
    'https://eand.co/',
    'https://levelup.gitconnected.com/',
    'https://medium.com/',
    'https://uxdesign.cc/',
    /https:\/\/.*\.medium\.com\//
  ],
  'css/focus-mode-Microsoft-Developer-Blogs.css': [
    'https://devblogs.microsoft.com/'
  ],
  'css/focus-mode-Microsoft-Learn.css': [
    'https://learn.microsoft.com'
  ],
  'css/focus-mode-MSN-News.css': [
    'https://www.msn.com/en-us/news/'
  ],
  'css/focus-mode-NBC-News.css': [
    'https://www.nbcnews.com/news/us-news/'
  ],
  'css/focus-mode-Neowin.css': [
    'https://www.neowin.net/'
  ],
  'css/focus-mode-Net-Tutorials.css': [
    'https://net-tutorials.com/',
    'https://ajax.net-tutorials.com/',
    'https://asp.mvc-tutorial.com/',
    'https://asp.net-tutorials.com/',
    'https://csharp.net-tutorials.com/',
    'https://css3-tutorial.net/',
    'https://html5-tutorial.net/',
    'https://javascript-tutorial.com/',
    'https://jquery-tutorial.net/',
    'https://php5-tutorial.com/',
    'https://wpf-tutorial.com/'
  ],
  'css/focus-mode-PCWorld.css': [
    'https://www.pcworld.com/article/'
  ],
  'css/focus-mode-Pocket-Read.css': [
    'https://getpocket.com/read'
  ],
  'css/focus-mode-Pocket-Saves.css': [
    'https://getpocket.com/saves'
  ],
  'css/focus-mode-Quartz.css': [
    'https://qz.com/'
  ],
  'css/focus-mode-Quora.css': [
    'https://www.quora.com/',
    /https:\/\/.*\.quora\.com\//
  ],
  'css/focus-mode-Reddit.css': [
    'https://www.reddit.com/',
    'https://new.reddit.com/',
  ],
  'css/focus-mode-Reuters.css': [
    'https://www.reuters.com/'
  ],
  'css/focus-mode-Scientific-American.css': [
    'https://www.scientificamerican.com/'
  ],
  'css/focus-mode-Slashdot.css': [
    'https://slashdot.org/',
    /https:\/\/.*\.slashdot\.org\/story\//
  ],
  'css/focus-mode-Stack-Exchange.css': [
    'https://askubuntu.com/',
    'https://stackoverflow.blog/',
    'https://stackoverflow.com/',
    'https://superuser.com/',
    /https:\/\/.*\.stackexchange.com\//
  ],
  'css/focus-mode-The-Fantasy-Review.css': [
    'https://thefantasyreviews.com/'
  ],
  'css/focus-mode-The-New-Republic.css': [
    'https://newrepublic.com/'
  ],
  'css/focus-mode-The-Guardian.css': [
    'https://www.theguardian.com/'
  ],
  'css/focus-mode-The-New-York-Times.css': [
    'https://www.nytimes.com/'
  ],
  'css/focus-mode-The-New-Yorker.css': [
    'https://www.newyorker.com/'
  ],
  'css/focus-mode-The-Register.css': [
    'https://www.theregister.com/'
  ],
  'css/focus-mode-The-Washington-Post.css': [
    'https://www.washingtonpost.com/'
  ],
  'css/focus-mode-TPGi.css': [
    'https://www.tpgi.com/'
  ],
  'css/focus-mode-Vox.css': [
    'https://www.vox.com/'
  ],
  'css/focus-mode-WikiBooks.css': [
    'https://en.wikibooks.org/wiki/'
  ],
  'css/focus-mode-Wikipedia.css': [
    'https://en.wikipedia.org/wiki/'
  ],
  'css/focus-mode-Windows-Central.css': [
    'https://www.windowscentral.com/'
  ],
  'css/focus-mode-Wired.css': [
    'https://www.wired.com/'
  ],
  'css/focus-mode-Word-Daily.css': [
    'https://worddaily.com/'
  ],
  'css/focus-mode-Word-Genius.css': [
    'https://www.wordgenius.com/'
  ]
};
const StylesheetToSupportWebsitesMap = new Map(Object.entries(StylesheetToSupportWebsitesJSON));

function IsInvalid(variable) {
  return (typeof(variable) === 'undefined' || variable == null);
}

function IsString(variable) {
  return (typeof(variable) === 'string' || variable instanceof String);
}

function IsRegExp(variable) {
  return (variable instanceof RegExp);
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

function Matches(url, test) {
  if (IsRegExp(test)) {
    const found = url.match(test);
    return (found != null);
  }
  if (!IsString(test)) {
    return false;
  }
  if (url.startsWith(test)) {
    return true;
  }
  const indexOfAsterisk = test.indexOf('*');
  if (indexOfAsterisk == -1) {
    return false;
  }
  const found = url.match(test);
  return (found != null);
}

function GetStylesheet(url) {
  if (StringIsNullOrEmpty(url) || url.startsWith("chrome://")) {
    return '';
  }
  let foundStylesheet = 'css/focus-mode-Default.css';
  for (const [Stylesheet, Websites] of StylesheetToSupportWebsitesMap) {
    const filteredWebsites = Websites.filter(test => Matches(url, test));
    if (filteredWebsites.length != 0) {
      foundStylesheet = Stylesheet;
      break;
    }
  }
  return foundStylesheet;
}

async function ChromeActionOnClicked(tab) {
  const methodName = 'ChromeActionOnClicked';
  const url = tab.url;
  const stylesheet = GetStylesheet(url);
  const isSupported = !StringIsNullOrEmpty(stylesheet);
  console.debug(`${methodName} Status: url is '${url}'; isSupported is ${isSupported}.`);
  if (!isSupported) {
    return;
  }
  console.debug(`${methodName} Status: stylesheet is '${stylesheet}'.`);
  /* We retrieve the action badge to check if the extension is 'ON' or 'OFF'. */
  const prevState = await browser.action.getBadgeText({ tabId: tab.id });
  /* Next state will always be the opposite. */
  const nextState = prevState === 'ON' ? 'OFF' : 'ON';
  /* Set the action badge to the next state. */
  await browser.action.setBadgeText({
    tabId: tab.id,
    text: nextState
  });
  switch(nextState){
    case 'ON': {
      await browser.scripting.insertCSS({
        files: [stylesheet],
        target: { tabId: tab.id }
      });
      break;
    }
    case 'OFF': {
      await browser.scripting.removeCSS({
        files: [stylesheet],
        target: { tabId: tab.id }
      });
      break;
    }
  }
}

browser.runtime.onInstalled.addListener(() => {
  browser.action.setBadgeText({
    text: 'OFF'
  });
});

/* When the user clicks on the extension action. */
browser.action.onClicked.addListener(ChromeActionOnClicked);
