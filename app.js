var initialCount = 330;
var finalCount = 14;
var duration = 10 * 60 * 1000;

function startCountdown() {
  var storedStartTime = localStorage.getItem("startTime");
  var startTime;
  if (storedStartTime) {
    startTime = parseInt(storedStartTime, 10);
  } else {
    startTime = Date.now();
    localStorage.setItem("startTime", startTime);
  }

  var decrementAmount = (initialCount - finalCount) / duration;

  function updateCounter() {
    var elapsedTime = Date.now() - startTime;
    var currentCount = initialCount - Math.round(elapsedTime * decrementAmount);

    if (currentCount >= finalCount) {
      document.getElementById("counter").textContent = currentCount;
      setTimeout(updateCounter, 1000);
    } else {
      document.getElementById("counter").textContent = finalCount;
      localStorage.setItem("startTime", Date.now());
      startCountdown();
    }
  }

  updateCounter();
}

startCountdown();
