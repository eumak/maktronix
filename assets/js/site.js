document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (!page) return;

  const navLinks = document.querySelectorAll('#mainNav .nav-link[data-page]');
  navLinks.forEach((link) => {
    const isActive = link.dataset.page === page;
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  document.getElementById("current-year").textContent = new Date().getFullYear();
});

document.addEventListener('click', function (event) {
  const navbar = document.querySelector('.navbar-collapse');
  const toggler = document.querySelector('.navbar-toggler');

  if (!navbar || !toggler) return;

  const isClickInside =
    navbar.contains(event.target) || toggler.contains(event.target);

  if (!isClickInside && navbar.classList.contains('show')) {
    new bootstrap.Collapse(navbar).hide();
  }
});