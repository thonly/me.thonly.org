import template from './template.mjs';

class TlBody extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const video = this.shadowRoot.querySelector('video');
        video.src = `components/tl-body/background${Math.floor(Math.random()*2+1)}.mp4`;
        //video.style.display = window.chrome ? 'block' : 'none';

        const card = this.shadowRoot.querySelector('tl-card');
        const front = this.shadowRoot.getElementById('front');
        const back = this.shadowRoot.getElementById('back')

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
    }

    async copy() {
        const alert = this.shadowRoot.getElementById('alert');
        await navigator.clipboard.writeText("https://me.thonly.org");
        alert.textContent = "The URL has been copied!";
        alert.style.display = 'block';
        setTimeout(() => alert.style.display = 'none', 5000);
    }
}

customElements.define('tl-body', TlBody);