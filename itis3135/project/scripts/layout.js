function loadHeader() {
  fetch("components/header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("dynamic-header").innerHTML = html;
    });
}

function loadFooter() {
  fetch("components/footer.html")
    .then((res) => res.text())
    .then((data) => {
      const footer = document.getElementById("dynamic-footer");
      if (footer) {
        footer.innerHTML = data;
      }
    })
    .catch((err) => console.error("Footer load failed:", err));
}
