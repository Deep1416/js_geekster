let btn = document.getElementById("btn");
let player = document.getElementById("player_list");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let firstName = document.getElementById("first_name").value;
  let lastName = document.getElementById("last_name").value;
  let country = document.getElementById("Country").value;
  let score = document.getElementById("point").value;
 
  if (firstName == "" || lastName == "" || country == "" || score == "") {
    alert("All field required");
  }

  let name =document.createElement("div");
  let countryCOntent = document.createElement("div");
  let point = document.createElement("div");

});
