window.addEventListener("DOMContentLoaded", runJSON);

async function runJSON() {
  


 
  const specialbase = await fetch("https://bymabe.dk/hellengallery-wp/wp-json/wp/v2/categories?_embed?&parent=27");
  const specialArray = await specialbase.json();

  const basepoint = await fetch ("https://bymabe.dk/hellengallery-wp/wp-json/wp/v2/theme-slideshow?categories=26&_embed");
  const baseData = await basepoint.json();

  prepareOffer(baseData);
  console.log(basepoint);


  prepareOffers(specialArray);
  console.log(specialbase);


}

function prepareOffers(specialArray) {
    specialArraydone = specialArray.map(prepareOffer_desc);
  }

  function prepareOffer_desc(offerObject) {
    const template = document.querySelector("#offer-temp").content;
    const offercopy = template.cloneNode(true);
    offercopy.querySelector("#offer-name").textContent = offerObject.name;
    offercopy.querySelector("#offerintro").textContent = offerObject.description;
    const parent = document.querySelector("main");
    parent.appendChild(offercopy);
  }

  function  prepareOffer(baseData){
    baseData.forEach(showOffer);
  }

  function showOffer(offer){
    const template = document.querySelector("#slideshow-temp").content;
    const copy = template.cloneNode(true);
    copy.querySelector("img").src = offer._embedded["wp:featuredmedia"][0].source_url;
    copy.querySelector(".img-link").href = "imagepage.html?id=" + offer.id;
  
    // copy.querySelector;
  
    // document.querySelectorAll(".dropdown-content a").forEach((button) => (button.href = "themepage.html?categories=" + slide.categories));
  
    const parent = document.querySelector("#slideshow-con");
    parent.appendChild(copy);
  }
  