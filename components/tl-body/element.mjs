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

    async copy() {
        const alert = this.shadowRoot.getElementById('alert');
        await navigator.clipboard.writeText("https://me.thonly.org");
        alert.textContent = "The URL has been copied!";
        alert.style.display = 'block';
        setTimeout(() => alert.style.display = 'none', 5000);
    }
}

customElements.define('tl-body', TlBody, { extends: 'body' });