import { loadCss } from "../../utils/style";
import style from "./style.css"

export default class Image extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        loadCss(this, style)

        const image = this.ownerDocument.createElement('img');
        image.src = "https://images-gmi-pmc.edge-generalmills.com/22547405-39a7-42cf-867b-1c29b47b9e4a.jpg"
        this.shadowRoot?.appendChild(image);
    }
}

customElements.define('app-image', Image);
