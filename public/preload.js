const {contextBridge} = require('electron');
const {getVersions, getBook, changePassage} = require('../src/controllers/data');

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

window.addEventListener('DOMContentLoaded', () => {
  //select all the translations and sources and add them to the selectors
  const tabs = document.getElementById('tabs') 
  //for (tab of tabs.children) {
    //getVersions(tab.id)
    //eventually pull open tabs from previous session, with the corrected "selected" option for each
  //}
})

// These functions are exposed for calling from front end
contextBridge.exposeInMainWorld('DB', {
  getPassage: (searchText) => {
    getBook(searchText)
  },
  changePassage: (type, sign) => {
    changePassage(type, sign)
  },
  newTab: (tabId) => {
    getVersions(tabId)
  }
})

