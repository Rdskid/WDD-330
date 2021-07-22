var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
const requestURL =
  "https://raw.githubusercontent.com/Rdskid/WDD-330/c1aca1a03f09f7b40df83bc23533ebaf1ca0aa7d/Final/scores.json";

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const scores = jsonObject["scores"];

    for (let x = 1; x < scores.length; x++) {
      let card = document.createElement("section");
      let place = document.createElement("h2");
      let name = document.createElement("h3");
      let occupation = document.createElement("p");
      let time = document.createElement("p");
      let secret = document.createElement("p");

      place.textContent = scores[i].place;
      name.textContent = scores[i].name;
      occupation.textContent = scores[i].occupation;
      time.textContent = scores[i].time;
      secret.textContent = scores[i].secret;

      card.appendChild("place");
      card.appendChild("name");
      card.appendChild("occupation");
      card.appendChild("time");
      card.appendChild("secret");

      document.querySelector("div.scores").appendChild("card");
      console.log("testloop");
    }
  });

var elements = document.getElementsByClassName("section");
for (i = 0; i < elements.length; i++) {
  elements[i].style.width = "100%";
}
