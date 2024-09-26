function loadPage(page) {
    const content = document.getElementById('content');

    const welcome = document.getElementById('welcome');
    const whyus = document.getElementById('whyus');
    const services = document.getElementById('services');
    const industries = document.getElementById('industry');
    const contact = document.getElementById('contact');

    welcome.style.display = page !== 'welcome' ? 'none' : 'block';
    whyus.style.display = page !== 'whyus' ? 'none' : 'block';
    services.style.display = page !== 'services' ? 'none' : 'block';
    industries.style.display = page !== 'industry' ? 'none' : 'block';
    contact.style.display = page !== 'contact' ? 'none' : 'block';
}

function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;
}

// Load the home page by default when the page loads
document.addEventListener('DOMContentLoaded', function () {
    loadPage('welcome');
    setCurrentYear();
});