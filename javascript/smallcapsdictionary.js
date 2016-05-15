(function () {
  var dictionary = [
    "HCI",
    "YAML",
    "UX",
    "RSI",
    "NLP"
  ];

  var articleContainer = document.getElementsByClassName("single-post__body")[0];

  dictionary.forEach(function (word) {
    var regexp = new RegExp("(" + word + ")", "g"),
        replacement = "<span class='fs-sc'>$1</span>";
    articleContainer.innerHTML = articleContainer.innerHTML.replace(regexp, replacement);
  });
})();
