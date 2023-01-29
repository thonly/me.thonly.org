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
        //Array.from(this.shadowRoot.getElementById('tagline').children).forEach(element => this.#assignGimics(element));
        this.#handleOrientation();
        screen.orientation.onchange = this.#handleOrientation.bind(this);
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
        if (window.innerWidth <= 480 || window.innerHeight <= 480) {
            switch (screen.orientation.type) {
                case "landscape-primary":
                    this.style.setProperty('--card-scale', 0.6);
                    console.log("landscape");
                    break;
                case "landscape-secondary":
                    this.style.setProperty('--card-scale', 0.6);
                    console.log("landscape reverse");
                    break;
                case "portrait-primary":
                    this.style.setProperty('--card-scale', 0.4);
                    console.log("portrait");
                    break;
                case "portrait-secondary":
                    this.style.setProperty('--card-scale', 0.4);
                    console.log("portrait reverse");
                    break;
                default:
                    console.log("Orientation API not supported in this browser");
            }
        }
    }

    #assignGimics(element) {
        const gimics = ['colorRun', 'jumper', 'inverter', 'rotate', 'antiRotate', 'colorRun2', 'swipe'];
        const delay = Math.floor(Math.random() * 1);
        const aniTime = Math.floor(Math.random() * 1) + 2;
        const next = delay + aniTime;
        element.style.animation = gimics[Math.floor(Math.random() * gimics.length)];
        element.style.animationDelay = delay + "s";
        element.style.animationDuration = aniTime + "s";
        setTimeout(this.#assignGimics.bind(this), next * 1000, element);
    }
}

customElements.define('tl-card', TlCard);