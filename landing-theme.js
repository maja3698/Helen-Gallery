// const themebase =
//   "https://bymabe.dk/hellengallery-wp/wp-json/wp/v2/categories?_embed??&parent=16";

window.addEventListener("DOMContentLoaded", runJSON);
// const parentParams = new URLSearchParams(window.location.search);
// const parentname = urlParams.get("id");

async function runJSON() {
  // const landingpage = fetch ("https://bymabe.dk/hellengallery-wp/wp-json/wp/v2/homepage?_embed")
  // const landingObject = await landingpage.json();
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

  // when loaded, prepare data objects
  prepareThemes(themeArray);
  prepareMedias(mediaArray);
  prepareSizes(sizeArray);
  console.log(themeArray);
  prepareDesc_Themes(themeDescArray);
  // prepareLanding(landingObject)
  // console.log(sizeArray)
  // console.log(mediaArray)
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

// function prepareLanding(landingObject) {
//   // console.log(sizeObject)
//   const template = document.querySelector("#hp-temp").content;
//   const landingcopy = template.cloneNode(true);
//   landingcopy.querySelector("p").textContent = landingObject.site_description;
//   landingcopy.querySelector("img").src = landingObject._embedded["wp:featuredmedia"][0].source_url;
//   const landingparent = document.querySelector(".container");
//   landingparent.appendChild(landingcopy);

// }

// window.addEventListener("DOMContentLoaded", runThemes);
// // const parent = pa

function prepareTheme_desc(themeObject) {
  const template = document.querySelector("#theme-temp").content;
  const themecopy = template.cloneNode(true);
  themecopy.querySelector("#theme-name").textContent = themeObject.name;
  themecopy.querySelector("#themeintro").textContent = themeObject.description;
  const parent = document.querySelector("main");
  parent.appendChild(themecopy);
}

// fetch(themebase)
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     handleThemes(data);
//   });

// function handleThemes(data) {
//   console.log(data);
//   data.forEach(showThemes);
// }
// function showThemes(theme) {
//   const themetemp = document.querySelector(".theme-temp").content;
//   const copy = themetemp.cloneNode(true);
//   copy.querySelector("a").textContent = theme.name;
//   copy.querySelector("a").href = "themepage.html?id=" + theme.id;
//   copy.querySelector

//   document.querySelector(".dropdown-content a:first-child").href = "themepage.html?id=9";
//   document.querySelector(".dropdown-content a:nth-child(2)").href = "themepage.html?id=10";
//   document.querySelector(".dropdown-content a:nth-child(3)").href = "themepage.html?id=11";
//   document.querySelector(".dropdown-content a:nth-child(4)").href = "themepage.html?id=12";
//   document.querySelector(".dropdown-content a:nth-child(5)").href = "themepage.html?id=13";
//   document.querySelector(".dropdown-content a:nth-child(6)").href = "themepage.html?id=14";

//   document.querySelector(".dropdown-content .size:first-child").href = "themepage.html?id=7";
//   document.querySelector(".dropdown-content .size:nth-child(2)").href = "themepage.html?id=6";
//   document.querySelector(".dropdown-content .size:nth-child(3)").href = "themepage.html?id=5";
//   document.querySelector(".dropdown-content .size:nth-child(4)").href = "themepage.html?id=4";

//   const themeparent = document.querySelector(".Tdropdown-content");
//   themeparent.appendChild(copy);
// };
