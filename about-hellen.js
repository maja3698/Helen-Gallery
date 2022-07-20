const aboutpage = "https://bymabe.dk/hellengallery-wp/wp-json/wp/v2/about-hellen-page?_embed?";

fetch(aboutpage)
  .then(function (res) {
    return res.json();
  })
  .then(function (page) {
  handleAboutpage(page);
  });

function handleAboutpage(page) {
  console.log("aboutpage", page);
  page.forEach(showAboutpage);
}

function showAboutpage(aboutpage) {
  const template = document.querySelector("#hellen-temp").content;
  const copy = template.cloneNode(true);
  copy.querySelector("iframe").src = `https://www.youtube.com/watch?v=${aboutpage.video}`
  copy.querySelector("#adresse").textContent = aboutpage.adresse;
  copy.querySelector("#tlf").textContent = aboutpage.telefonnummer;
  copy.querySelector("#mail").textContent = aboutpage.mail;
  copy.querySelector("#hjemmeside").textContent = aboutpage.hjemmeside;
//   copy.querySelector("img").src = aboutpage._embedded["wp:featuredmedia"][0].source_url;
  const parent = document.querySelector("main");
  parent.appendChild(copy);
}