const imageParams = new URLSearchParams(window.location.search);
const imageid = imageParams.get("id");

const imagebase = `https://bymabe.dk/hellengallery-wp/wp-json/wp/v2/theme-slideshow/${imageid}?_embed`;

fetch(imagebase)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    showImages(data);
    console.log(data);
  });

// function handleImages(data) {
//   console.log(data);
//   data.forEach(showImages);
// }

function showImages(image) {
  const imagetemp = document.querySelector("#image-temp").content;
  const imagecopy = imagetemp.cloneNode(true);
  imagecopy.querySelector("#full-image").src = image._embedded["wp:featuredmedia"][0].source_url;
  imagecopy.querySelector("#artwork-nr").textContent = `Q${image.artwork_number}`;
  imagecopy.querySelector("#title_and_date").textContent = `"${image.title.rendered}" ${image.date_of_making}`;
  imagecopy.querySelector("#size_and_materiels").textContent = `${image.size_in_cm}. ${image.materiels}`;
  imagecopy.querySelector("#price").textContent = `Price: ${image.price_for_artwork} DKK`;



  const parent = document.querySelector("main");
  parent.appendChild(imagecopy);
}
