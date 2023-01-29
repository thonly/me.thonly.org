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

    get #scale() {
        return Number(getComputedStyle(this).getPropertyValue('--card-scale'));
    }

    connectedCallback() {
        //this.#handleOrientation();
        //screen.orientation.onchange = this.#handleOrientation.bind(this);
        this.#container.onmouseenter = () => this.#container.animate([{ transform: `scale(${this.#scale})` }, { transform: `scale(${this.#scale + 0.1}) perspective(1400px)` }], { duration: 500, fill: "forwards" });
        this.#container.onmouseleave = () => this.#container.animate([{ transform: `scale(${this.#scale + 0.1})` }, { transform: `scale(${this.#scale}) perspective(1400px)` }], { duration: 500, fill: "forwards" });
    }

    front() {
        this.#card.classList.remove('flip');
    }

    back() {
        this.#card.classList.add('flip');
    }

    speak(name) {
        const audio = new Audio(`components/tl-card/${name}.mp3`);
        audio.play();
    }
    
    #handleOrientation() {
        switch (screen.orientation.type) {
            case "landscape-primary":
                this.style.setProperty('--card-scale', 0.8);
                console.log("landscape");
                break;
            case "landscape-secondary":
                this.style.setProperty('--card-scale', 0.8);
                console.log("landscape reverse");
                break;
            case "portrait-primary":
                this.style.setProperty('--card-scale', 0.6);
                console.log("portrait");
                break;
            case "portrait-secondary":
                this.style.setProperty('--card-scale', 0.6);
                console.log("portrait reverse");
                break;
            default:
                console.log("Orientation API not supported in this browser");
          }
    }
}

customElements.define('tl-card', TlCard);