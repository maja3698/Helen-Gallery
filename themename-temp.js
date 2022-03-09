// window.addEventListener("DOMContentLoaded", runThemes);
// // const parent = pa



// async function runThemes() {
 
  
//   const themeDesc = await fetch(`https://bymabe.dk/hellengallery-wp/wp-json/wp/v2/categories?_embed?&parent=${parent}`);
//   const themeDescArray = await themeDesc.json();
//   console.log(themeDesc)
//   prepareThemes_desc(themeDescArray);
// }

// function prepareThemes_desc(themeDescArray) {
//   themeDescArraydone = themeDescArray.map(prepareTheme_desc);
// }

// function prepareTheme_desc(themeObject) {
//   const template = document.querySelector("#theme-temp").content;
//   const themecopy = template.cloneNode(true);
//   themecopy.querySelector("#theme-name").textContent = themeObject.name;
//   themecopy.querySelector("#themeintro").textContent = themeObject.description;
//   const parent = document.querySelector("main");
//   parent.appendChild(themecopy);
// }
