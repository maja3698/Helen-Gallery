const endpoint = "https://bymabe.dk/helengallery-wp/wp-json/wp/v2/homepage?_embed";

fetch(endpoint)
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
  copy.querySelector("img").src = homepage.header_image.guid;
  const parent = document.querySelector("main");
  parent.appendChild(copy);
}
