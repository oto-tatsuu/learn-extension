let span=document.createElement("span")
span.innerText="Notification:"
document.body.appendChild(span)
let dom=document.createElement("input")
dom.type="checkbox"
dom.setAttribute("id", "notif-enable")
console.log("notif-enable onload"); 
    chrome.storage.sync.get("notifEnable", function (storage) {
        dom.checked = storage.notifEnable;
    });
document.body.appendChild(dom)

dom.onclick = function () {
    console.log(`notif-enable click ${dom.checked}`); 
    if (dom.checked) {
        chrome.storage.sync.set({ "notifEnable": true });
    } else {
        chrome.storage.sync.set({ "notifEnable": false });
    }
}
