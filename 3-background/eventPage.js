chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "test",
        title: "select text",
        contexts: ["selection"]
    })
  });

chrome.contextMenus.onClicked.addListener(function (event) {
    if (event.menuItemId == "test" && event.selectionText) {
        chrome.storage.sync.set({ "data": event.selectionText });
    }
})

chrome.storage.onChanged.addListener(function(changes, storageName){
    console.log(changes)
    console.log(storageName)
    chrome.action.setBadgeText({text: changes.data.newValue.toString()})
})