  // Function to pluralize the time past (eg. minute or minutes / day or days)
  const pluralize = (count, noun, suffix = 's') => `${count} ${noun}${count !== 1 ? suffix : ''}`;

  // Time passed calculation
  const timePast = (curr, prev) => {
    const msMin = 60 * 1000, msHr = msMin * 60, msDay = msHr * 24, msMonth = msDay * 30, msYr = msDay * 365;
    let elapsed = curr - prev;

    if (elapsed < msMin) return pluralize(Math.round(elapsed / 1000), 'second');
    else if (elapsed < msHr) {
      elapsed = Math.round(elapsed / msMin);
      return pluralize(elapsed, 'minute');
    }
    else if (elapsed < msDay) {
      elapsed = Math.round(elapsed / msHr);
      return pluralize(elapsed, 'hour');
    }
    else if (elapsed < msMonth) {
      elapsed = Math.round(elapsed / msDay);
      return pluralize(elapsed, 'day');
    }
    else if (elapsed < msYr) {
      elapsed = Math.round(elapsed / msMonth);
      return pluralize(elapsed, 'month');
    }
    else {
      elapsed = Math round(elapsed / msYr);
      return pluralize(elapsed, 'year');
    }
  }

  // Function to calculate time for a single element
  function calculateTimeForElement(publishedDateElement, postTimeElement) {
    const publishedDateStr = publishedDateElement.textContent;
    const publishedDate = new Date(publishedDateStr);

    const offset = publishedDate.getTimezoneOffset();
    const publishedDateUTC = new Date(publishedDate.getTime() + offset * 60 * 1000);

    const currentTime = new Date();
    const timePassed = currentTime - publishedDateUTC;

    if (timePassed < 24 * 60 * 60 * 1000) {
      // If less than 24 hours, display 'Today'
      postTimeElement.innerText = 'Today';
    } else {
      postTimeElement.innerText = timePast(currentTime, publishedDateUTC) + ' ago';
    }
  }

  // Initial calculation for existing elements
  document.querySelectorAll('.published-date').forEach((publishedDateElement, index) => {
    const postTimeElement = document.querySelectorAll('.post-time')[index];
    calculateTimeForElement(publishedDateElement, postTimeElement);
  });

  // Event delegation for dynamically loaded items
  document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('load-button')) {
      const collection = event.target.closest('.collection');
      const publishedDateElements = collection.querySelectorAll('.published-date:not(.calculated)');
      const postTimeElements = collection.querySelectorAll('.post-time:not(.calculated)');

      publishedDateElements.forEach((publishedDateElement, index) => {
        const postTimeElement = postTimeElements[index];
        calculateTimeForElement(publishedDateElement, postTimeElement);
        publishedDateElement.classList.add('calculated');
        postTimeElement.classList.add('calculated');
      });
    }
  });
