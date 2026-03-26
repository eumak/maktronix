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

  if (page === 'thank-you') {
    trackLead();
  }

  if (page === 'services') {
    trackPageView('services');
  }

  if (page === 'erp') {
    trackPageView('erp');
  }

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

document.querySelectorAll('a[href="../contact"]').forEach(btn => {
  btn.addEventListener('click', () => {
    gtag('event', 'click_request_demo', {
      source: 'erp_page'
    });
  });
});

function trackLead() {
  if (typeof gtag === 'function') {
    gtag('event', 'generate_lead', {
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }
}

function trackPageView(pageName) {
  if (typeof gtag === 'function') {
    gtag('event', 'page_view_custom', {
      page_name: pageName
    });
  }
}