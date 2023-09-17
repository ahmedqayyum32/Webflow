<script>
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
      
      // Replace 'review_rating' with your actual rating text element class name
      const ratingElements = collectionList.querySelectorAll('.review_rating');
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

    // Replace 'review_list' with your actual CMS collection list class name
    const collectionListClassName = 'review_list';

    // Get the item count
    const itemCount = countCMSItems(collectionListClassName);

    // Get the average rating
    const averageRating = calculateAverageRating(collectionListClassName);

    // Update the element with the class name '.review_total' with the item count
    const totalElement = document.querySelector('.review_total');
    totalElement.textContent = `${itemCount}`;

    // Update the element with the class name '.review_average' with the average rating
    const averageElement = document.querySelector('.review_average');
    averageElement.textContent = `${averageRating.toFixed(1)}`;
  });
</script>
