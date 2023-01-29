import template from './template.mjs';

class TlBody extends HTMLBodyElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const card = document.querySelector('tl-card');
        const front = document.getElementById('front');
        const back = document.getElementById('back')

        front.onclick = () => {
            front.style.display = 'none';
            back.style.display = 'block';
            card.back();
        }

        back.onclick = () => {
            back.style.display = 'none';
            front.style.display = 'block';
            card.front();
        }

        this.style.display = 'flex';
    }
}

customElements.define('tl-body', TlBody, { extends: 'body' });