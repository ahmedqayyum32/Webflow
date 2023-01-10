<script>
const city_color = document.getElementById('city_color');
const city_text = document.getElementById('city_text');


// Create a new Date object with the current local time
const currentTime = new Date();
console.log(currentTime);

// Calculate the time offset between the local time and New York time (in hours)
const timeOffset = -5;  // New York is 5 hours behind UTC

// Adjust the current local time to New York time by adding the time offset (in hours)
currentTime.setHours(currentTime.getHours() + timeOffset);
console.log(currentTime);

// Get the hour of the day in New York time
const currentHour = (currentTime.getHours() - 5);
console.log(currentHour);


if (currentHour >= 8 && currentHour <= 19) {
  city_color.style.backgroundColor = '#93e163';  // green
	city_text.textContent = 'Open Now';
} else {
  city_color.style.backgroundColor = '#e16363';  // red
	city_text.textContent = 'Closed Now';
}
</script>
