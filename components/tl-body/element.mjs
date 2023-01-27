import template from './template.mjs';

class TlBody extends HTMLBodyElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        
    }

    
}

customElements.define('tl-body', TlBody, { extends: 'body' });