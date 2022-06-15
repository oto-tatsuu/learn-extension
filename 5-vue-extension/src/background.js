chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request, sender, sendResponse)
  if (request.id === 'content') {
    console.log(`at background get ${request.message}`)
    sendResponse({ message: 'I got it' })
  }
})

chrome.runtime.onConnect.addListener(function (port) {
  console.assert(port.name === "content")
  port.onMessage.addListener(function () {
    port.postMessage({ message: 'I got it' })
  })

})