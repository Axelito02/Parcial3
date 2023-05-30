import { dispatch } from "../../store";
import { changedEvent, clickEvent } from "../../utils/addEvents";
import { loadCss } from "../../utils/style";
import style from "./style.css"

const enum intRecipe{
    name = "",
    ingredients = "",
    rules = "",
    thumnbnail = "",

}

export default class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';
        loadCss(this, style)

        const image = this.ownerDocument.createElement('img');
        this.shadowRoot?.appendChild(image);

        const inputName = this.ownerDocument.createElement('input');
        this.shadowRoot?.appendChild(inputName);
        changedEvent(inputName, () => {

        })

        const inputIngred = this.ownerDocument.createElement('input');
        this.shadowRoot?.appendChild(inputIngred);
        changedEvent(inputIngred, () => {
            
        })

        const inputRules = this.ownerDocument.createElement('input');
        this.shadowRoot?.appendChild(inputRules);
        changedEvent(inputRules, () => {
            
        })

        const btnSend = this.ownerDocument.createElement('button');
        btnSend.textContent = "Save"
        this.shadowRoot?.appendChild(btnSend);
        clickEvent(btnSend, ()=> {
            dispatch(saveRecipe(intRecipe))
        })

    }
}

customElements.define('app-form', Form);
