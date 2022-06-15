let input = document.createElement("input")
input.setAttribute("id", "input")
document.body.appendChild(input)
let button1 = document.createElement("button")
button1.setAttribute("id", "content1")

let button2 = document.createElement("button")
button2.setAttribute("id", "content2")


button1.innerHTML = "Short Connect"
button2.innerHTML = "Long Connect"

// 点击发送input 内容到background,短连接
button1.onclick = function () {
    let message = document.getElementById("input").value
    chrome.runtime.sendMessage({ id: "content", message: message }, function (response) {
        console.log(`at content:get response ${response.message}`)
    })
}

let con = chrome.runtime.connect({ name: "content" })
con.onMessage.addListener(function (request) {
    console.log(`at content:get request ${request.message}`)
})
// 点击发送input 内容到background,长连接
button2.onclick = function () {
    let message = document.getElementById("input").value
    con.postMessage({ message: message })
}
document.body.appendChild(button1)
document.body.appendChild(button2)

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.id == "popup") {
        console.log(`at content script get ${request.message}`)
        sendResponse({ message: "I got it" })
    }
})
