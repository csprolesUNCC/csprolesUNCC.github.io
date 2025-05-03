function loadHeader() {
  fetch("components/header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("dynamic-header").innerHTML = html;
    });
}
