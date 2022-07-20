
const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get("id");
let myarray = [];



// const endpoint = `https://bymabe.dk/hellengallery-wp/wp-json/wp/v2/theme-slideshow?_embed?categories=17`;
const endpoint = `https://bymabe.dk/hellengallery-wp/wp-json/wp/v2/theme-slideshow?categories=${id}&_embed`;


fetch(endpoint)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleSlideshow(data);
  });


function handleSlideshow(data) {
  // console.log(data);
 data.forEach(showSlideshow);
  console.log(data);
  console.log(myarray);

}

function showSlideshow(slide) {
  const template = document.querySelector("#slideshow-temp").content;
  const copy = template.cloneNode(true);
  copy.querySelector("img").src = slide._embedded["wp:featuredmedia"][0].source_url;
  copy.querySelector(".img-link").href = "imagepage.html?id=" + slide.id;

  // copy.querySelector;

  // document.querySelectorAll(".dropdown-content a").forEach((button) => (button.href = "themepage.html?categories=" + slide.categories));

  const parent = document.querySelector("#slideshow-con");
  parent.appendChild(copy);
}

