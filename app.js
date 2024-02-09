let a = new Date();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds();
let timeString = `Current Time: ${a}, Hours: ${h}, Minutes: ${m}, Seconds: ${s}`;
  // Update the content of the HTML element with id 'output'
  document.getElementById('output').innerText = timeString;
// Call updateTime initially to set the initial time
updateTime();
