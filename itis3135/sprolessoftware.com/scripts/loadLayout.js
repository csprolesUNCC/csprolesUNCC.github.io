function loadHeaderAndFooter() {
    fetch('components/header.html')
        .then((response) => response.text())
        .then((data) => {
            document.querySelector('header').outerHTML = data;
        });

    fetch('components/footer.html')
        .then((response) => response.text())
        .then((data) => {
            document.querySelector('footer').outerHTML = data;
            document.getElementById('year').textContent = new Date().getFullYear();
        });
}

// Run on page load
window.onload = loadHeaderAndFooter;
