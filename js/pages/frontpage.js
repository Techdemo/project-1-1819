"use strict"

import { sanitize } from "../components/collection.js";

let frontPage = () => {
    sanitize()
    const markup =
    `<h2>dit is de front</h2>`

    document.getElementById("app").insertAdjacentHTML("afterbegin", markup)
}


export { frontPage }