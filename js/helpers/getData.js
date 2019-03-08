"use strict"
import { API } from '../../node_modules/oba-wrapper/js/index.js';
import { renderList } from '../components/renderList.js';
import { sanitize, addLoader } from '../components/collection.js';

function getData(){
    sanitize()
    addLoader()
    const api = new API({ key: "1e19898c87464e239192c8bfe422f280" });
        async () => {
            sanitize()
            addLoader()
            const iterator = await api.createIterator("search/beatles&facet=type(sheetmusic)");
            for await (const response of iterator) {
                checkData(response);
            }
        };


    let checkData = data => {
        data.length == 0 ? noData() : formObject(data)
    }

    function formObject(sheets) {
        console.log(sheets)
        let array = []
        sheets.forEach(sheet => {
            if (sheet.titles.title._text !== undefined
                && sheet.publication.year._text !== undefined
                && ("series" in sheet)) {
                array.push(createObject(sheet))
            }
            return array
        })
        renderList(array)
    }

    function createObject(sheet) {
        let sheetObject = {
            title: sheet.titles.title._text,
            pubYear: sheet.publication.year._text,
            series: sheet.series["series-title"]._text
        }
        return sheetObject
    }

}

export { getData }