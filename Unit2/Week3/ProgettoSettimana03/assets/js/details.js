const API = "https://striveschool-api.herokuapp.com/api/product/";
const Authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlNGFkYTg4Zjc0MDAwMTQyODc5MGUiLCJpYXQiOjE2ODM5MDExNDYsImV4cCI6MTY4NTExMDc0Nn0.XTBvZj5kUrNc7GFzB4Ruq7D2qbz7leErkxQEnND-Xiw";

let eventId = new URLSearchParams(window.location.search).get("eventId");
console.log("EVENTID", eventId);

const store = function () {
  fetch(API + eventId, {
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
      let shop = document.getElementById("containerDetails");
      shop.innerHTML = `
            <div class="container mt-5">
            <div class="row">
              <div class="col offset-1 col-12 col-md-5">
                <img src="${events.imageUrl}" class="w-75" alt="" />
              </div>
              <div class="col col-12 col-md-5 mt-2">
                <h2>${events.name}</h2>
                <h5 class="mt-2">Description</h5>
                <p>${events.description}</p>
                <h5>Brand</h5>
                <p>${events.brand}</p>
                <h5>Price</h5>
                <p>${events.price}$</p>
                <br />
                <a href="back_office.html?eventId=${events._id}" id="btnEdit" class="my-3 btn btn-primary">Edit</a>
              </div>
            </div>
          </div>
      </div>
      </div>
      `;
    });
};

let deleteButtonReference = document.getElementById("delete");
deleteButtonReference.addEventListener("click", async () => {
  let response = await fetch(API + eventId, {
    method: "DELETE",
    headers: {
      Authorization: Authorization,
    },
  });
  console.log(response);
  if (response.ok) {
    alert("Successfully deleted");
    window.location.replace("homepage.html");
  } else {
    alert("Something went wrong!");
  }
});

store();

const saveObject = async function (obj) {
  try {
    let response = await fetch(API, {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: {
        Authorization: Authorization,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      alert("Edit successfull");
    } else {
      alert("Something went wrong!");
    }
  } catch (error) {
    console.log(error);
  }
};

let buttonRefernce = document.getElementById("btnEdit");
buttonRefernce.addEventListener("click", () => {
  let newObject = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("url").value,
    price: document.getElementById("price").value,
  };
  console.log(newObject);
  saveObject(newObject);
});
