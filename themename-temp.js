const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const database = `https://bymabe.dk/helengallery-wp/wp-json/wp/v2/theme-topic/${id}?_embed`;

fetch(database)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleTopic(data);
  });

function handleTopic(data) {
  console.log(data);
  data.forEach(showTopic);
}

function showTopic(theme) {
  const template = document.querySelector("#theme-temp").content;
  const themecopy = template.cloneNode(true);
  themecopy.querySelector("#theme-name").textContent = theme.theme.rendered;
  themecopy.querySelector("#themeintro").textContent = theme.theme_description;
  const parent = document.querySelector("main");
  parent.appendChild(themecopy);
}
