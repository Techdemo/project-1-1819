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


export { sanitize, addLoader, noData, resultNumber }
