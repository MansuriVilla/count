(async function () {
  async function fetchStartTime() {
    try {
      const response = await fetch(
        "https://count-iimm.onrender.com/countdown/start-time"
      );
      const data = await response.json();
      return data.startTime;
    } catch (error) {
      console.error("Error fetching start time:", error);
      return Date.now(); // Fallback to current time
    }
  }

  async function startCountdown() {
    const startTime = await fetchStartTime();
    const initialCount = 330;
    const finalCount = 14;
    const duration = 600 * 60 * 1000;

    const decrementAmount = (initialCount - finalCount) / duration;

    function updateCounter() {
      const elapsedTime = Date.now() - startTime;
      const currentCount =
        initialCount - Math.round(elapsedTime * decrementAmount);

      if (currentCount >= finalCount) {
        document.getElementById("counter").textContent = currentCount;
        setTimeout(updateCounter, 10000);
      } else {
        document.getElementById("counter").textContent = finalCount;
      }
    }

    updateCounter();
  }

  startCountdown();
})();
