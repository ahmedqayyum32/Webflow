<script>
document.addEventListener("DOMContentLoaded", () => {
  const maxCharacters = 1400, // whatever max charachter you like to display
    targets = document.getElementsByClassName("about-rector");

  Array.from(targets).forEach((target) => {
    const text = target.textContent,
      truncate = text.substring(0, maxCharacters);
    target.textContent = `${truncate} ...`;
  });
});
</script>
