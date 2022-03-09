const homepage = "https://bymabe.dk/hellengallery-wp/wp-json/wp/v2/homepage?_embed";

fetch(homepage)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleHomepage(data);
  });

function handleHomepage(data) {
  console.log(data);
  data.forEach(showHomepage);
}

function showHomepage(homepage) {
  const template = document.querySelector("#hp-temp").content;
  const copy = template.cloneNode(true);
  copy.querySelector("p").textContent = homepage.site_description;
  copy.querySelector("img").src = homepage._embedded["wp:featuredmedia"][0].source_url;
  const parent = document.querySelector("main");
  parent.appendChild(copy);
}
