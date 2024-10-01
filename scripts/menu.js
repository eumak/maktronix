class MenuComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <div class="hamburger" id="hamburger" onclick="toggleMenu()">
                    &#9776; <!-- Hamburger icon -->
                </div>
                <ul id="nav-links">
                    <li><a href="#" onclick="loadPage('welcome')">Welcome</a></li>
                    <li><a href="#" onclick="loadPage('whyus')">Why Choose Us</a></li>
                    <li><a href="#" onclick="loadPage('services')">Our Services</a></li>
                    <li><a href="#" onclick="loadPage('industry')">Industries</a></li>
                    <li><a href="#" onclick="loadPage('contact')">Contact Us</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('menu-component', MenuComponent);