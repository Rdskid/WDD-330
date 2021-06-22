const links = [
  {
    label: "Week1 Notes",
    url: "week1/",
  },

  {
    label: "Week2 Notes",
    url: "week2/",
  },

  {
    label: "Week3 Notes",
    url: "week3/",
  },

  {
    label: "Week4 Notes",
    url: "week4/",
  },

  {
    label: "Week5 Notes",
    url: "week5/",
  },

  {
    label: "Week6 Notes",
    url: "week6/",
  },

  {
    label: "Week7 Notes",
    url: "week7/",
  },

  {
    label: "Week8 Notes",
    url: "week8/",
  },

  {
    label: "Week9 Notes",
    url: "week9/",
  },
];

let weeklist = document.getElementById("weeklist");

links.forEach(function (link) {
  var li = document.createElement("li");
  li.innerHTML = `<a href="${link.url}">${link.label}</a>`;
  weeklist.appendChild(li);
});
