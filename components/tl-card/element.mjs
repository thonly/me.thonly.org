import template from './template.mjs';

class TlCard extends HTMLElement {
    #container;
    #card;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.#container = this.shadowRoot.querySelector('.container');
        this.#card = this.shadowRoot.querySelector('.card');
    }

    connectedCallback() {
        this.#container.onmouseenter = () => this.#container.animate([{ transform: "scale(1)" }, { transform: "scale(1.1) perspective(1400px)" }], { duration: 500, fill: "forwards" });
        this.#container.onmouseleave = () => this.#container.animate([{ transform: "scale(1.1)" }, { transform: "scale(1) perspective(1400px)" }], { duration: 500, fill: "forwards" });
    }

    front() {
        this.#card.classList.remove('flip');
    }

    back() {
        this.#card.classList.add('flip');
    }
}

customElements.define('tl-card', TlCard);