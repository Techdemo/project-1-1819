import { sanitize, resultNumber } from './collection.js'

let renderList = array => {
  sanitize()
    array.forEach(sheet => {
        const markup =
        `
        <article class="listItem" id="listItem">
          <div class="listItemImage" style="background-image: url(${sheet.img});"></div>
          <div class="listItemContent">
            <h4>${sheet.title}</h4>
            <p>${sheet.series}</p>
            <p>${sheet.pubYear}</p>
          </div>
          <footer>
            <button id="saveToList">Save</button>
          </footer>
        </article>
        `
        document.getElementById("app").insertAdjacentHTML("afterbegin", markup)
    });
    resultNumber(array)
    populateButtons()
}

let populateButtons = () => {
  let Toastbutton = document.getElementById("saveToList");

  const markup =
    `<article id="toast" class="toast">
    <p>Sheet saved to list</p>
  </article>`
  document.getElementById("app").insertAdjacentHTML("afterbegin", markup)
  Toastbutton.addEventListener("click", showToast)
}
let showToast = () => {
  let toast = document.getElementById("toast");
  toast.classList.add("toastShow")
  setTimeout(function () {
   toast.classList.remove("toastShow")
  }, 3000);
}


export { renderList }
