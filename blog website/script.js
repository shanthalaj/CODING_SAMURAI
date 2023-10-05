// JavaScript for handling navigation between pages
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('href');
            loadPage(page);
        });
    });

    // Load the initial page
    loadPage('index.html');
});

function loadPage(page) {
    const main = document.querySelector('main');
    fetch(page)
        .then(response => response.text())
        .then(content => {
            main.innerHTML = content;
        })
        .catch(error => console.error(error));
}