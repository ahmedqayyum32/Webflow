<script>
// 🍉 when DOM has loaded
document.addEventListener("DOMContentLoaded", () => {
  const limit = 130, // number of character allowed before truncation trigger
    maxCharacters = 130; // number of characher displayed after elipsis
  truncateParagraphs(limit, maxCharacters);
});

// 🍆 helper function
function countCharacters(target) {
  const characters = target.textContent.split("");
  return characters.length; // returns the amount of characters incl. spaces
}

// 🥬 truncate function
function truncateParagraphs(limit, maxCharacters) {
  const targets = document.getElementsByClassName("heading-style-h5 news-truncate");
  Array.from(targets).forEach((target) => {
    if (countCharacters(target) < limit) return; // skip truncation
    const text = target.textContent,
      elipsis = text.substring(0, maxCharacters);
    target.textContent = `${elipsis}...`;
  }); // end for each
}
</script>
