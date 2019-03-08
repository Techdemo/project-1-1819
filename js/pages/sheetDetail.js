
"use strict"

import { sanitize, addLoader } from "../components/collection.js";


let renderSheetTest = () => {
    addLoader()
    sanitize()
    let markup = `
    <h2>Norwegian Wood - The beatles</h2>
    <iframe src="https://flat.io/embed/5980b43b4814014c874f9fb6-norwegian-wood?layout=responsive&audioSource=&videoPosition=" height="600px" width="100%" frameBorder="0" allowfullscreen></iframe>
    `
    document.getElementById("app").insertAdjacentHTML("afterbegin", markup)
}





export { renderSheetTest }