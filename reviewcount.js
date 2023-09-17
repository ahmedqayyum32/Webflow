document.addEventListener('DOMContentLoaded', function () {
  // Function to count CMS items
  function countCMSItems(collectionListClassName) {
    const collectionList = document.querySelector(`.${collectionListClassName}`);
    const itemCount = collectionList.querySelectorAll('.w-dyn-item').length;
    return itemCount;
  }

  // Function to calculate the average rating
  function calculateAverageRating(collectionListClassName) {
    const collectionList = document.querySelector(`.${collectionListClassName}`);
    const ratingElements = collectionList.querySelectorAll('.rating-text');
    let totalRating = 0;

    ratingElements.forEach((ratingElement) => {
      const rating = parseFloat(ratingElement.textContent);
      if (!isNaN(rating)) {
        totalRating += rating;
      }
    });

    if (ratingElements.length > 0) {
      return totalRating / ratingElements.length;
    } else {
      return 0; // Default to 0 if there are no ratings
    }
  }

  // Update elements with the specified data attributes
  const overviewElements = document.querySelectorAll('.review-overview');
  overviewElements.forEach((overviewElement) => {
    const collectionListClassName = overviewElement.dataset.cmsClass;
    const totalElement = overviewElement.querySelector('.review-overview_total');
    const averageElement = overviewElement.querySelector('.review-overview_average');

    const itemCount = countCMSItems(collectionListClassName);
    const averageRating = calculateAverageRating(collectionListClassName);

    totalElement.textContent = `Total Items: ${itemCount}`;
    averageElement.textContent = `Average Rating: ${averageRating.toFixed(2)}`;
  });
});
