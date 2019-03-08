"use strict"
import { sanitize } from '../components/collection.js'
import { showNav } from '../APP.js';

let playListRender = () => {
    showNav()
    sanitize()
    const markup =
        `
     <h2>Playlist</h2>
    <section class="saveListRender">
        <button class="accordion">The Beatles playlist</button>
        <div class="panel">
            <section class="saveListRenderItem">
                <h3>Norwegian Wood - The Beatles</h3>
                <div>
                    <button id="openLink" onclick="location.href='#seeSheet'">open</button>
                    <button>Delete</button>
                </div>
            </section>
            <section class="saveListRenderItem">
                <h3>Let it Be - The Beatles</h3>
            <div>
                <button id="openLink" onclick="location.href='#seeSheet'">open</button>
                <button>Delete</button>
            </div>
        </section>
        </div>

        <button class="accordion">Study list</button>
        <div class="panel">
            <section class="saveListRenderItem">
        <h3>Au clair de la lune</h3>
            <div>
                <button id="openLink" onclick="location.href='#seeSheet'">open</button>
                <button>Delete</button>
            </div>
        </section>
        <section class="saveListRenderItem">
        <h3>Mozart symph. no 9</h3>
            <div>
                <button id="openLink" onclick="location.href='#seeSheet'">open</button>
                <button>Delete</button>
            </div>
        </section>
        </div>
    </section>
    `

    document.getElementById("app").insertAdjacentHTML("afterbegin", markup)

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

}
export { playListRender }