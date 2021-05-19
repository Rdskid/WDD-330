
const hikeList = [
  {
    name: "Bechler Falls",
    imgSrc: "../week5/images/waterfall.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    difficulty: "Easy",
    description:
      "Beautiful short hike along the Bechler river to Bechler Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
  },
  {
    name: "Teton Canyon",
    imgSrc: "../week5/images/waterfall.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    difficulty: "Easy",
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions:
      "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Stateline Road for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
  },
  {
    name: "Denanda Falls",
    imgSrc: "../week5/images/waterfall.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "7 miles",
    difficulty: "Moderate",
    description:
      "Beautiful hike through Bechler meadows river to Denanda Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
  }
]

//loops information to show cards
function createHTML() {


for (let i = 0; i < hikeList.length; i++ ) {
  
  let hikeCard = document.createElement('section');
  let hikeName = document.createElement('h2');
  let image = document.createElement('img');
  let distance = document.createElement('h3');
  let difficulty = document.createElement('h3');
  let description = document.createElement('p');
  let direction = document.createElement('p');

  hikeName.textContent = hikeList[i].name;
  distance.textContent = hikeList[i].distance;
  difficulty.textContent = hikeList[i].difficulty;
  description.textContent = hikeList[i].description;
  direction.textContent = hikeList[i].directions;

  image.setAttribute('src', hikeList[i].imgSrc);
  image.setAttribute('alt', hikeList[i].imgAlt);

  hikeCard.appendChild(hikeName);
  hikeCard.appendChild(distance);
  hikeCard.appendChild(difficulty);
  hikeCard.appendChild(description);
  hikeCard.appendChild(direction);
  hikeCard.appendChild(image);

  document.querySelector('div.hikes').appendChild(hikeCard);
  }
}
module.export = {
  createHTML
};