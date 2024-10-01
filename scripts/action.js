function loadPage(page) {
    const content = document.getElementById('content');

    const welcome = document.getElementById('welcome');
    const whyus = document.getElementById('whyus');
    const services = document.getElementById('services');
    const industries = document.getElementById('industry');
    const contact = document.getElementById('contact');
    const sedetail = document.getElementById('sedetail');
    const badetail = document.getElementById('badetail');
    const bpmdetail = document.getElementById('bpmdetail');
    const dedetail = document.getElementById('dedetail');
    const testdetail = document.getElementById('testdetail');
    const mcdetail = document.getElementById('mcdetail');

    welcome.style.display = page !== 'welcome' ? 'none' : 'block';
    whyus.style.display = page !== 'whyus' ? 'none' : 'block';
    services.style.display = page !== 'services' ? 'none' : 'block';
    industries.style.display = page !== 'industry' ? 'none' : 'block';
    contact.style.display = page !== 'contact' ? 'none' : 'block';
    sedetail.style.display = page !== 'sedetail' ? 'none' : 'block';
    badetail.style.display = page !== 'badetail' ? 'none' : 'block';
    bpmdetail.style.display = page !== 'bpmdetail' ? 'none' : 'block';
    dedetail.style.display = page !== 'dedetail' ? 'none' : 'block';
    testdetail.style.display = page !== 'testdetail' ? 'none' : 'block';
    mcdetail.style.display = page !== 'mcdetail' ? 'none' : 'block';

    // Collapse the menu after a link is clicked
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('active');
}

function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;
}

// Function to toggle the navigation menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

function showElements() {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }); // Triggers earlier

    cards.forEach(card => {
        observer.observe(card);
    });
}

// Load the home page by default when the page loads
document.addEventListener('DOMContentLoaded', function () {
    loadPage('welcome');
    setCurrentYear();
    showElements();
});