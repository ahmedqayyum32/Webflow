window.onload = function() {
  // Get the text content from the "text" element
  const textContent = document.getElementById("text").textContent;
  
  // Put the text inside the "input" element
  const inputElement = document.getElementById("input");
  inputElement.value = textContent;
};
