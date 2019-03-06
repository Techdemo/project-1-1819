"use strict"

import { API } from '../../node_modules/oba-wrapper/js/index.js';
import { sanitize, addLoader, noData, resultNumber } from './components/collection.js';
import { renderList } from './components/renderList.js';
import { saveListRender } from './pages/saveListRender.js';

    const api = new API({ key: "1e19898c87464e239192c8bfe422f280" });
    let submit = document.getElementById("submit");
    submit.addEventListener("click", getData())

    let navButton = document.getElementById("sideNavButton")
    navButton.addEventListener("click", showNav)

    function showNav(){
        let nav = document.querySelector("nav");
        nav.classList.toggle("show");
    }

function getData () {
(async () => {
    sanitize()
    addLoader()
    const iterator = await api.createIterator("search/beatles&facet=type(sheetmusic)");
    for await (const response of iterator) {
        checkData(response);
    }
})();
}

let checkData = data => {
    data.length == 0 ? noData() : formObject(data)
}

function formObject (sheets){
    console.log(sheets)
    let array = []
    sheets.forEach(sheet => {
        if (sheet.titles.title._text !== undefined
            && sheet.publication.year._text !== undefined
            && ("series" in sheet)){
            array.push(createObject(sheet))
        }
        return array
    })
    renderList(array)
}

function createObject (sheet){
    let sheetObject = {
        title: sheet.titles.title._text,
        pubYear: sheet.publication.year._text,
        series: sheet.series["series-title"]._text
    }
return sheetObject
}

routie({
    'saved': function () {
        sanitize()
        saveListRender()
    },
    'playLists': function () {
    },
    'home': function () {
        sanitize()
        showNav()
        getData()
    },
    'seeSheet': function (){
        console.log("seeSheet route")
    }
});



export { showNav }
