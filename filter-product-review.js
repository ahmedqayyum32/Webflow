window.addEventListener('DOMContentLoaded', function() {
  // Get the product name from the attribute
  var productName = document.querySelector('[review="product-name"]').textContent;

  // Get all the review items
  var reviewItems = document.querySelectorAll('[review="product-item"]');

  // Loop through each review item
  reviewItems.forEach(function(item) {
    // Get the review name from the attribute
    var reviewName = item.querySelector('[review="product-review"]').textContent;

    // Check if the review belongs to the current product
    if (reviewName === productName) {
      // Show the review item
      item.style.display = 'block';
    } else {
      // Hide the review item
      item.style.display = 'none';
    }
  });
});
