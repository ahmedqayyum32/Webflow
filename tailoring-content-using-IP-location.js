<script>
// Function to get user's country code based on IP address
async function getUserCountryCode() {
  try {
    const response = await fetch('https://ipinfo.io?token=3562a6b139e492');
    const data = await response.json();
    return data.country;
  } catch (error) {
    console.error('Error fetching user country:', error);
    return null;
  }
}

// Function to fetch country data from Rest Countries API
async function fetchCountryData() {
  try {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching country data:', error);
    return [];
  }
}


// Function to filter and display relevant blog items or message
async function filterBlogItemsOrShowMessage() {
  const userCountryCode = await getUserCountryCode();

  if (userCountryCode) {
    const countryData = await fetchCountryData();

    const countryCodes = countryData.reduce((codes, country) => {
      if (country.alpha2Code) {
        codes[country.alpha2Code] = country.name;
      }
      return codes;
    }, {});

    const blogItems = document.querySelectorAll(".blog-cms-item"); // Replace with the actual class name of your blog items
    const noItemsMessage = document.getElementById("noItemsMessage"); // Replace with the actual ID of the message div

    let hasItemsForCountry = false;

    blogItems.forEach(item => {
      const countryField = item.querySelector(".country-name"); // Replace with the actual class name of the country field in your CMS
      const itemCountryCode = countryField.textContent.trim();

      if (itemCountryCode === userCountryCode) {
        item.style.display = "block";
        hasItemsForCountry = true;
      } else {
        item.style.display = "none";
      }
    });

    if (!hasItemsForCountry) {
      noItemsMessage.style.display = "flex";
    } else {
      noItemsMessage.style.display = "none";
    }
  }
}

// Call the function to filter blog items based on user's country or show message
filterBlogItemsOrShowMessage();

</script>
