chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.storage.sync.get("ison", ({ ison }) => {
    if (!!ison && changeInfo.status == "complete" && tab.active) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["add-css.js"],
      });
    }
  });
});

chrome.action.onClicked.addListener(function (tab) {
  chrome.storage.sync.get("ison", ({ ison }) => {
    if (ison) {
      chrome.storage.sync.set({ ison: false });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["remove-css.js"],
      });
    } else {
      chrome.storage.sync.set({ ison: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["add-css.js"],
      });
    }
  });
});
