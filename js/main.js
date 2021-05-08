
const links = [
    {
        label: "Week1 Notes",
        url: "week1/index.html"
    },

    {
        label: "Week2 Notes",
        url: "week2/index.html"
    },

    {
        label: "Week3 Notes",
        url: "week3/index.html"
    }
]

let weeklist = document.getElementById("weeklist");

links.forEach(function(link) {
    var li = document.createElement("li");
    li.innerHTML = `<a href="${link.url}">${link.label}</a>`;
    weeklist.appendChild(li);
  });