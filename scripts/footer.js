class FooterComponent extends HTMLElement {
    connectedCallback() {
        const currentYear = new Date().getFullYear();
        this.innerHTML = `
            <footer>
                <p>&copy; ${currentYear} Your Company. All rights reserved.</p>
            </footer>
        `;
    }
}
setCurrentYear();

customElements.define('footer-component', FooterComponent);