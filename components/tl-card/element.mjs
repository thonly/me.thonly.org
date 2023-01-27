import template from './template.mjs';

class TlCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        
    }
}

customElements.define('tl-card', TlCard);