<script>
document.addEventListener("DOMContentLoaded", () => {
  const limit = 130; // Number of characters allowed before truncation trigger
  const maxCharacters = 130; // Number of characters displayed after ellipsis
  truncateParagraphs(limit, maxCharacters);
});

function countCharacters(target) {
  // Use the length property directly for character count
  return target.textContent.length;
}

function truncateParagraphs(limit, maxCharacters) {
  const targets = document.querySelectorAll(".heading-style-h5.news-truncate");
  targets.forEach((target) => {
    if (countCharacters(target) <= limit) return; // Skip truncation if already within the limit
    const text = target.textContent;
    const truncatedText = text.slice(0, maxCharacters) + '...';
    target.textContent = truncatedText;
  });
}
</script>
