document.addEventListener("DOMContentLoaded", function () {
    function selectTabFromHash() {
        let hash = window.location.hash; // Get the hash from URL
        if (hash) {
            let tabId = hash.substring(1); // Remove the '#' symbol
            let tabLink = document.querySelector(`[data-w-tab="${tabId}"]`); // Find tab link

            if (tabLink) {
                setTimeout(() => {
                    tabLink.click(); // Click the tab link
                }, 100); // Delay to ensure Webflow tabs are ready
            }
        }
    }

    selectTabFromHash(); // Run on page load

    // Optional: If user navigates with hash change, auto-select the tab
    window.addEventListener("hashchange", selectTabFromHash);
});
