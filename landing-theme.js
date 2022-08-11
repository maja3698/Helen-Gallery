
window.addEventListener("DOMContentLoaded", runJSON);

async function runJSON() {
  

  const themebase = await fetch("https://bymabe.dk/hellengallery-wp/wp-json/wp/v2/categories?_embed??&parent=16");
  const themeArray = await themebase.json();
  const parentParams = new URLSearchParams(window.location.search);
  const parentname = urlParams.get("id");
  const themeDesc = await fetch(`https://bymabe.dk/hellengallery-wp/wp-json/wp/v2/categories/${parentname}`);
  const themeDescArray = await themeDesc.json();
  const mediabase = await fetch("https://bymabe.dk/hellengallery-wp/wp-json/wp/v2/categories?_embed?&parent=8");
  const mediaArray = await mediabase.json();
  const sizebase = await fetch("https://bymabe.dk/hellengallery-wp/wp-json/wp/v2/categories?_embed?&parent=3");
  const sizeArray = await sizebase.json();

  
  prepareThemes(themeArray);
  prepareMedias(mediaArray);
  prepareSizes(sizeArray);
  console.log(themeArray);
  prepareDesc_Themes(themeDescArray);

}

function prepareThemes(themeArray) {
  themeArraydone = themeArray.map(prepareTheme);
}

function prepareMedias(mediaArray) {
  mediaArraydone = mediaArray.map(prepareMedia);
}

function prepareSizes(sizeArray) {
  sizeArraydone = sizeArray.map(prepareSize);
}

function prepareDesc_Themes(themeDescArray) {
  prepareTheme_desc(themeDescArray);
}

function prepareTheme(themeObject) {
  const themetemp = document.querySelector(".theme-temp").content;
  const copy = themetemp.cloneNode(true);
  copy.querySelector("#themeName").textContent = themeObject.name;
  copy.querySelector("#themeName").href = "themepage.html?id=" + themeObject.id;
  copy.querySelector;
  const themeparent = document.querySelector(".Tdropdown-content");
  themeparent.appendChild(copy);
}

function prepareMedia(mediaObject) {
  // console.log(mediaObject)

  const mediatemp = document.querySelector(".media-temp").content;
  const mediacopy = mediatemp.cloneNode(true);
  mediacopy.querySelector("#mediaName").textContent = mediaObject.name;
  mediacopy.querySelector("#mediaName").href = "themepage.html?id=" + mediaObject.id;
  const mediaparent = document.querySelector(".Mdropdown-content");
  mediaparent.appendChild(mediacopy);
}

function prepareSize(sizeObject) {
  // console.log(sizeObject)

  const sizetemp = document.querySelector(".size-temp").content;
  const sizecopy = sizetemp.cloneNode(true);
  sizecopy.querySelector("#sizeName").textContent = sizeObject.name;
  sizecopy.querySelector("#sizeName").href = "themepage.html?id=" + sizeObject.id;
  const sizeparent = document.querySelector(".Sdropdown-content");
  sizeparent.appendChild(sizecopy);
}


function prepareTheme_desc(themeObject) {
  const template = document.querySelector("#theme-temp").content;
  const themecopy = template.cloneNode(true);
  themecopy.querySelector("#theme-name").textContent = themeObject.name;
  themecopy.querySelector("#themeintro").textContent = themeObject.description;
  const parent = document.querySelector("main");
  parent.appendChild(themecopy);
}

