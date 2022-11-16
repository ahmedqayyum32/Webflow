<script>
  // Function to pluralize the time past (eg. minute or minutes / day or days)
  const pluralize = (count, noun, suffix = 's') => `${count} ${noun}${count !== 1 ? suffix : ''}`;

  const timePast = (curr, prev) => {
    const msMin = 60 * 1000, msHr = msMin * 60, msDay = msHr * 24, msMonth = msDay * 30, msYr = msDay * 365;
    let elapsed = curr - prev;

    if (elapsed < msMin) return pluralize(Math.round(elapsed/1000), 'second');
    else if (elapsed < msHr) {
      elapsed = Math.round(elapsed/msMin);
      return pluralize(elapsed, 'minute') 
    }
    else if (elapsed < msDay) {
      elapsed = Math.round(elapsed/msHr);
      return pluralize(elapsed, 'hour')
    }
    else if (elapsed < msMonth) {
      elapsed = Math.round(elapsed/msDay);
      return pluralize(elapsed, 'day') 
    }
    else if (elapsed < msYr) {
      elapsed = Math.round(elapsed/msMonth);
      return pluralize(elapsed, 'month') 
    }
    else {
      elapsed = Math.round(elapsed/msYr);
      return pluralize(elapsed, 'year') 
    }
  }

  let now = new Date();

// Replace .post-time class
  document.querySelectorAll('.post-time').forEach(box => {
    let parsedTime  = Date.parse(box.innerText);
    box.innerText = timePast(now, new Date(parsedTime)) + ' ago';
  })
</script>
