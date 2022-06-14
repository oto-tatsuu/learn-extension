document.getElementById("get").onclick = function () {
    chrome.storage.sync.get(["data","notifEnable"], function (storage) {
        let dom = document.getElementById("input");
        if (storage.data) {
            dom.value = storage.data;
        } else {
            dom.value = "";
        }
        
        if (storage.notifEnable) {
            const notifOptions = {
                type: "basic",
                title: "tatsuu",
                iconUrl: "icons/logo.png",
                message: `you get value ${storage.data}`,
            }
            chrome.notifications.create("testNotif", notifOptions)
            console.log('notif created')
        }
    });
}

document.getElementById("set").onclick = function () {
    let value = document.getElementById("input").value
    chrome.storage.sync.set({ data: value });
    chrome.storage.sync.get("notifEnable", function (storage) {
        if (storage.notifEnable) {
            const notifOptions = {
                type: "basic",
                title: "tatsuu",
                iconUrl: "icons/logo.png",
                message: `you set value to ${value}`,
            }
            chrome.notifications.create("testNotif", notifOptions)
            console.log('notif created')
        }
    });
}