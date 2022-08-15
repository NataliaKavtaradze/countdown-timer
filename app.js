// Set the date we're counting down to
let countDownDate = new Date("aug 30, 2022 00:00:00").getTime();
// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the results in an element with id
  document.getElementById("day-number").innerHTML = days;
  document.getElementById("hour-number").innerHTML = hours;
  document.getElementById("minute-number").innerHTML = minutes;
  document.getElementById("second-number").innerHTML = seconds;
}, 1000);
