// Function to update the current day of the week and UTC time in milliseconds
function updateDateTime() {
    const currentDayOfTheWeek = document.querySelector(
        '[data-testid="currentDayOfTheWeek"]'
    );
    const currentUTCTime = document.querySelector(
        '[data-testid="currentUTCTime"]'
    );
    const date = new Date();
    const dayOfTheWeek = date.toLocaleString("en-us", { weekday: "long" });
    const utcTime = date.getTime();

    currentDayOfTheWeek.textContent = dayOfTheWeek;
    currentUTCTime.textContent =  utcTime;
}

// Call updateDateTime initially to set the initial values
updateDateTime();

// Set up a timer to update the values every second (or adjust the interval as needed)
setInterval(updateDateTime, 1000); // 1000 milliseconds = 1 second