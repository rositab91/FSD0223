const API = "https://striveschool-api.herokuapp.com/api/product/";
const Authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlNGFkYTg4Zjc0MDAwMTQyODc5MGUiLCJpYXQiOjE2ODM5MDExNDYsImV4cCI6MTY4NTExMDc0Nn0.XTBvZj5kUrNc7GFzB4Ruq7D2qbz7leErkxQEnND-Xiw";

let eventId = new URLSearchParams(window.location.search).get("eventId");
console.log("EVENTID", eventId);

const store = function () {
  fetch(API, {
    method: "GET",
    headers: {
      Authorization: Authorization,
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((events) => {
      console.log(events);
      events.forEach((shopElement) => {
        console.log(shopElement);
        let shop = document.getElementById("yepodaStore");
        shop.innerHTML += `
        <div class="col col-12 col-md-4 col-lg-3 d-flex">
          <div class="card m-2 rounded-0 border border-secondary-subtle">
          <img src="${shopElement.imageUrl}" class="card-img-top" alt="">
         <div class="card-body">
            <h4 class="card-title">${shopElement.name}</h4>
            <h6 class="card-text mt-2">${shopElement.description}</h6>
            <p class="card-text mt-2">${shopElement.price}$</p>
          </div>
          <a href="details.html?eventId=${shopElement._id}" class="py-2 btn btn-warning text-dark btn-sm fw-semibold">Click here to learn more</a> 
        </div>`;
      });
    });
};
store();
