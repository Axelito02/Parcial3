import "./components/export"
import { loadCss } from "./utils/style";
import style from "./style.css"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        loadCss(this, style)
        
        const container = this.ownerDocument.createElement('section');
        container.classList.add("main")
        this.shadowRoot?.appendChild(container);

        const appImage = this.ownerDocument.createElement('app-image');
        container.appendChild(appImage);

        const appForm = this.ownerDocument.createElement('app-form');
        container.appendChild(appForm);
    }
}

customElements.define('app-container', AppContainer);
