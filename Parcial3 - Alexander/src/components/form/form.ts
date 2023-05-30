import { dispatch } from "../../store";
import { saveRecipe } from "../../store/actions";
import { changedEvent, clickEvent } from "../../utils/addEvents";
import { loadCss } from "../../utils/style";
import style from "./style.css"

const intRecipe = {
    name: "",
    ingredients: "",
    rules: "",
    thumnbnail: "",
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

        const inputName = this.ownerDocument.createElement('input');
        inputName.placeholder = "Name recipe"
        this.shadowRoot?.appendChild(inputName);
        changedEvent(inputName, (e: any) => {
            console.log(e.target.value);
            intRecipe.name = e.target.value;
        })

        const inputIngred = this.ownerDocument.createElement('input');
        inputIngred.placeholder = "Ingredients"
        this.shadowRoot?.appendChild(inputIngred);
        changedEvent(inputIngred, (e: any) => {
            console.log(e.target.value);
            intRecipe.ingredients = e.target.value
        })

        const inputRules = this.ownerDocument.createElement('input');
        this.shadowRoot?.appendChild(inputRules);
        inputRules.placeholder = "Rules"
        changedEvent(inputRules, (e: any) => {
            console.log(e.target.value);
            intRecipe.rules = e.target.value;
        })

        const btnSend = this.ownerDocument.createElement('button');
        btnSend.textContent = "Save"
        this.shadowRoot?.appendChild(btnSend);
        clickEvent(btnSend,() => {
            dispatch(saveRecipe(intRecipe))
        })

    }
}

customElements.define('app-form', Form);
