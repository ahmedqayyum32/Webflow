<script>
  // Function to pluralize the time past (eg. minute or minutes / day or days)
const pluralize = (count, noun, suffix = 's') => `${count} ${noun}${count !== 1 ? suffix : ''}`;

//Time passed calculation
const timePast = (curr, prev) => {
    const msMin = 60 * 1000, msHr = msMin * 60, msDay = msHr * 24, msMonth = msDay * 30, msYr = msDay * 365;
    let elapsed = curr - prev;

    if (elapsed < msMin) return pluralize(Math.round(elapsed / 1000), 'second');
    else if (elapsed < msHr) {
        elapsed = Math.round(elapsed / msMin);
        return pluralize(elapsed, 'minute')
    }
    else if (elapsed < msDay) {
        elapsed = Math.round(elapsed / msHr);
        return pluralize(elapsed, 'hour')
    }
    else if (elapsed < msMonth) {
        elapsed = Math.round(elapsed / msDay);
        return pluralize(elapsed, 'day')
    }
    else if (elapsed < msYr) {
        elapsed = Math.round(elapsed / msMonth);
        return pluralize(elapsed, 'month')
    }
    else {
        elapsed = Math.round(elapsed / msYr);
        return pluralize(elapsed, 'year')
    }
} //timePast function end

var d = new Date();
var n = d.getTimezoneOffset();
var ans = new Date(d.getTime() + n * 60 * 1000);


document.querySelectorAll('.post-time').forEach(box => {
    let createdTimeString = box.innerText + " GMT-05"
		let created = new Date(createdTimeString)
		let offset = d.getTimezoneOffset();
		let createdUTC = new Date(created.getTime() + offset * 60 * 1000);

		box.innerText = timePast(ans, createdUTC) + ' ago';
})

</script>
