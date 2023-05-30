import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const appForm = this.ownerDocument.createElement('app-form');
        this.shadowRoot?.appendChild(appForm);
    }
}

customElements.define('app-container', AppContainer);
