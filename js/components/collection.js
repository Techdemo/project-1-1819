"use strict";

let sanitize = () => {
    let app = document.getElementById("app")
    app.innerHTML = " "
}

let addLoader = () => {
    const markup =
        `<div class="lds-facebook"><div></div><div></div><div></div></div>`
    document.getElementById("app").insertAdjacentHTML("afterbegin", markup)
}
let noData = () => {
    const markup =
    `<h2>No results found</h2>`
    document.getElementById("app").insertAdjacentHTML("afterbegin", markup)
}
let resultNumber = (array) => {
    let number = array.length
    const markup =
    `<h3>${number} results found</h3>`
    document.getElementById("app").insertAdjacentHTML("afterbegin", markup)
}

let formHeader = () => {
    let header = document.querySelector("header")
    header.classList.toggle("minimizeHeader");
    let form = document.querySelector("form");
    form.classList.toggle("minimizeForm");
    console.log("header wordt kleiner");
}
let restoreHeader = () => {
    console.log("restore header loopt")
    let form = document.querySelector("form");
    let header = document.querySelector("header")
    form.classList.remove("minimizeHeader")
    header.classList.remove("minimizeForm")
}

let showToast = () => {
    console.log("Toast klaart")
}

export { sanitize, addLoader, noData, resultNumber, formHeader, restoreHeader, showToast }
