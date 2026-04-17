
  const timeElement = document.getElementById("time");

  function updateTime() {
    const currentTime = Date.now();
    timeElement.textContent = currentTime;
  }

  updateTime();

  setInterval(function () {
    updateTime();
  }, 1000);