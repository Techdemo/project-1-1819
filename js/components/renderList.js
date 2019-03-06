import { sanitize, resultNumber } from './collection.js'

let renderList = array => {
    array.forEach(sheet => {
        const markup =
        `
        <article class="listItem">
          <h4>${sheet.title}</h4>
          <p>${sheet.series}</p>
          <p>${sheet.pubYear}</p>
        </article>
        `
        document.getElementById("app").insertAdjacentHTML("afterbegin", markup)
    });
    resultNumber(array)
}

export { renderList }