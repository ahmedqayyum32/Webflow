<script>
  function initializeReviewOverview(element) {
    const cmsListSelector = element.getAttribute('zd-cms-list');
    const ratingFieldSelector = element.getAttribute('zd-rating-field');
    const averageFieldSelector = element.getAttribute('zd-average-field');
    const totalFieldSelector = element.getAttribute('zd-total-field');

    // Function to count CMS items
    function countCMSItems(collectionListSelector) {
      const collectionList = document.querySelector(collectionListSelector);
      const itemCount = collectionList.querySelectorAll('.w-dyn-item').length;
      return itemCount;
    }

    // Function to calculate the average rating
    function calculateAverageRating(collectionListSelector, ratingSelector) {
      const collectionList = document.querySelector(collectionListSelector);
      const ratingElements = collectionList.querySelectorAll(ratingSelector);
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

    const totalElement = document.querySelector(totalFieldSelector);
    const averageElement = document.querySelector(averageFieldSelector);

    const itemCount = countCMSItems(cmsListSelector);
    const averageRating = calculateAverageRating(cmsListSelector, ratingFieldSelector);

    totalElement.textContent = `Total Reviews: ${itemCount}`;
    averageElement.textContent = `Average Rating: ${averageRating.toFixed(2)}`;
  }

  document.addEventListener('DOMContentLoaded', function () {
    const overviewElements = document.querySelectorAll('.review-overview');
    overviewElements.forEach((element) => {
      initializeReviewOverview(element);
    });
  });
</script>
