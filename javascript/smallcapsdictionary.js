(function () {
  var dictionary = [
    "HCI",
    "YAML",
    "UX",
    "RSI",
    "NLP",
    "PDF",
    "UCL",
    "UCLIC",
    "CHI"
  ];

  var articleContainer = document.getElementsByClassName("single-post__body")[0];

  dictionary.forEach(function (word) {
    var regexp = new RegExp("(" + word + ")([^a-zA-Z])", "g"),
        replacement = "<span class='fs-sc'>$1</span>$2";
    articleContainer.innerHTML = articleContainer.innerHTML.replace(regexp, replacement);
  });
})();
