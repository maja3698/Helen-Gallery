const imagebase =
  "https://bymabe.dk/helengallery-wp/wp-json/wp/v2/theme-slideshow?_embed?";

fetch(imagebase)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleImages(data);
  });

function handleImages(data) {
  console.log(data);
  data.forEach(showImages);
}

function showImages(image) {
  const imagetemp = document.querySelector("#image-temp").content;
  const imagecopy = imagetemp.cloneNode(true);
  imagecopy.querySelector("#full-image").src = image.image_for_slideshow.guid;
  const parent = document.querySelector("main");
  parent.appendChild(imagecopy);
}
