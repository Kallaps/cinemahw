let card = document.querySelector(".card");
let API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";

fetch(API)
  .then((res) => res.json())
  .then((data) =>
    data.Search.forEach((item) => {
      console.log(item);
      card.innerHTML += `<div class="filmDiv"> <img  class='img' src = ${item.Poster}> <h3>${item.Title}</h3> <p>${item.Year}</p> </div> `;
    })
  );
