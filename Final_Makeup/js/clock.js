function setDate() {
  const secondHand = document.querySelector(".second-hand");
  const minsHand = document.querySelector(".minute-hand");
  const hourHand = document.querySelector(".hour-hand");
  var now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  //added my portion as a digital clock below
  let date = new Date();
  let hrs = date.getHours();
  let mns = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mns = mns < 10 ? "0" + mns : mns;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `${hrs}:${mns}:${secs}:${period}`;
  document.getElementById("numeral").innerHTML = time;
}

setInterval(setDate, 1000);
