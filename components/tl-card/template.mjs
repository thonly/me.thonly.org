const template = document.createElement("template");

// Reference: https://codepen.io/nazarelen/pen/MedejB?editors=1100
// https://ttsmp3.com

template.innerHTML = `
    <link rel="stylesheet" href="components/tl-card/shadow.css">
    <div class="container">
        <aside class="card">
            <section class="front">
                <header>
                    <a href="https://siliconwat.dev"><img class="logo" src="components/tl-card/siliconwat.png"></a>
                </header>
                <main>
                    <small>Fresno, California</small>
                    <small>Srae Ambel, Cambodia</small>
                </main>
                <footer>
                    <h1 onclick="this.getRootNode().host.speak('siliconwat')">Silicon Wat LLC</h1>
                    <p>Web, Blockchain, and iOS | Custom Development</p>
                    <a href="https://siliconwat.dev">siliconwat.dev</a>
                </footer>
            </section>
            <section class="back">
                <header>
                    <a href="https://thonly.org"><img class="logo" src="components/tl-card/thonly.jpg"></a>
                    <button>Book Remote Meeting</button>
                </header>
                <main>
                    <h1 onclick="this.getRootNode().host.speak('thonly')">Thon Ly</h1>
                    <p>Lead Architect & Consultant</p>
                    <!--<p>+1 (562) 726-2681</p>-->
                    <a href="mailto:thonly@siliconwat.dev">thonly@siliconwat.dev</a>
                </main>
                <footer>
                    <img class="social" src="components/tl-card/twitter.svg">
                    <img class="social" src="components/tl-card/facebook.svg">
                    <img class="social" src="components/tl-card/youtube.svg">
                </footer>
            </section>
        </aside>
    </div>
`;

export default template;