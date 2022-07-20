const tp = new URLSearchParams(window.location.search);

const allOf = tp.get("id");
let allArtworks = [];



const artworks = `https://bymabe.dk/hellengallery-wp/wp-json/wp/v2/theme-slideshow?&_embed`;

  document.querySelector(".input").addEventListener("input", searchBar);

fetch(artworks)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleArtworks(data);
  });


function handleArtworks(data) {
  // console.log(data);
 data.forEach(showArtworks);
 allArtworks = data
  console.log(data);
  console.log("all artworks:",allArtworks);

}

function showArtworks(work) {
    let artworkName = work.title.rendered.trim();
    return artworkName

}

function searchBar(e) {
    const searchString = e.target.value.toLowerCase();
    const searchedArtworks = allArtworks.filter((artwork) => {
      return artwork.title.rendered.toLowerCase().includes(searchString) || artwork.price_for_artwork.includes(searchString) || artwork.artwork_number.includes(searchString) || artwork.size_in_cm.includes(searchString) || artwork.date_of_making.includes(searchString)
    });
    // displayList(searchedStudents);
    showSearch(searchedArtworks);
  }

  function showSearch (artwork) {
      document.querySelector(".list").innerHTML = ""
      artwork.forEach(displaySearch);
      
  }

  function displaySearch(artwork) {
      const list =  document.querySelector("template#artwork").content.cloneNode(true);
      list.querySelector("h3").textContent = artwork.title.rendered;
      list.querySelector("img").src = artwork._embedded["wp:featuredmedia"][0].source_url;
      list.querySelector("#price").textContent = `${artwork.price_for_artwork} DKK`
      list.querySelector("#nr").textContent = `Nr: ${artwork.artwork_number}`
      document.querySelector(".list").appendChild(list);
  }


//   function displayList(students) {
//     document.querySelector("#list tbody").innerHTML = "";
//     console.log("displayList");
  
//     // build a new list
//     students.forEach(displayStudent);
//   }


// function displayStudent(student) {
//   const clone = document.querySelector("template#student").content.cloneNode(true);

//   // set clone data
//   clone.querySelector("[data-field=fname]").textContent = student.firstname;
//   //   clone.querySelector("[data-field=middle-name]").textContent =
//   //     student.middlename;
//   clone.querySelector("[data-field=mname]").textContent = student.middlename;

//   clone.querySelector("[data-field=lname]").textContent = student.lastname;

//   clone.querySelector("[data-field=house]").textContent = student.house;
//   clone.querySelector("[data-field=blood-status]").textContent = student.blood;