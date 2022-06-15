let button = document.createElement("button")
button.setAttribute("id", "content")
document.body.appendChild(button)


button.onclick=function () {
    console.log("in content script")
}


