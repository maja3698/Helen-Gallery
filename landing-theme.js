const themebase =
  "https://bymabe.dk/helengallery-wp/wp-json/wp/v2/theme-topic?_embed";

fetch(themebase)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleThemes(data);
  });

function handleThemes(data) {
  console.log(data);
  data.forEach(showThemes);
}
function showThemes(theme) {
  const themetemp = document.querySelector(".theme-temp").content;
  const copy = themetemp.cloneNode(true);
  copy.querySelector("a").textContent = theme.title.rendered;
  copy.querySelector("a").href = "themepage.html?id=" + theme.id;
  const themeparent = document.querySelector(".Tdropdown-content");
  themeparent.appendChild(copy);
};
