"use strict"
import { sanitize } from '../components/collection.js'
import { showNav } from '../APP.js';

let saveListRender = () => {
    showNav()
    sanitize()
    const markup =
    `
     <h2>Saved Sheets</h2>
    <section class="saveListRender">
        <section class="saveListRenderItem">
        <h3>Norwegian Wood - The Beatles</h3>
            <div>
                <button id="openLink" onclick="location.href='#seeSheet'">open</button>
                <button>Delete</button>
            </div>
        </section>

        <section class="saveListRenderItem">
            <h3>Harddays night - The Beatles</h3>
            <div>
                <button id="openLink" onclick="location.href='#seeSheet'">open</button>
                <button>Delete</button>
            </div>
        </section>
        <section class="saveListRenderItem">
            <h3>Eight days a week - The Beatles</h3>
            <div>
                <button id="openLink" onclick="location.href='#seeSheet'">open</button>
                <button>Delete</button>
            </div>
        </section>
    </section>
    `

    document.getElementById("app").insertAdjacentHTML("afterbegin", markup)


}
export { saveListRender }