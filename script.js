
// get the time element 
const timeElement = document.getElementById("time");

// time update function using the dayjs external library
function updateTime() {
  const currentTime = dayjs().format('HH:mm:ss A')

  timeElement.innerText = currentTime
}

// running the update function
updateTime();

// running the time update function every seconds
setInterval(function () {
  updateTime();
}, 1000);