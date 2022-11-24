var Webflow = Webflow || [];
Webflow.push(function () {
  var tabName = getParam('tab');
  if (!tabName) return;

  $('.' + tabName).triggerHandler('click');

  function getParam(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
});

// rename your tabs with combo classes e.g. .tab .custom-class
// #page-url is the section id where the tabs exists

// Add this link to the button/link
// /download?tab=custom-class#page-url
