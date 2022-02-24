const endpoint = "https://bymabe.dk/helengallery-wp/wp-json/wp/v2/theme-slideshow?_embed";

fetch(endpoint)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleSlideshow(data);
  });

function handleSlideshow(data) {
  console.log(data);
  data.forEach(showSlideshow);
}

function showSlideshow(slide) {
  const template = document.querySelector("#slideshow-temp").content;
  const copy = template.cloneNode(true);
  copy.querySelector("img").src = slide.image_for_slideshow.guid;
  const parent = document.querySelector("#slideshow-con");
  parent.appendChild(copy);
}
