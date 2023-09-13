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
                    <h1 onmouseenter="this.getRootNode().host.speak('siliconwat')" onclick="this.getRootNode().host.speak('siliconwat')">Silicon Wat LLC</h1>
                    <p id="tagline"><span>Web</span>, <span>Blockchain</span> and <span>iOS</span> | Custom Development</p>
                    <a href="https://siliconwat.dev">siliconwat.dev</a>
                </footer>
            </section>
            <section class="back">
                <header>
                    <a href="https://thonly.org"><img class="logo" src="components/tl-card/thonly.jpg"></a>
                    <button>Book <b>FREE</b> Consultation</button>
                </header>
                <main>
                    <h1 onmouseenter="this.getRootNode().host.speak('thonly')" onclick="this.getRootNode().host.speak('thonly')">Thon Ly</h1>
                    <p class="title">Lead Architect & Consultant</p>
                    <p><img class="detail" src="components/tl-card/mail.svg"> <a href="mailto:thonly@siliconwat.dev">thonly@siliconwat.dev</a></p>
                    <p title="Text Message or Voice Mail ONLY"><img class="detail" src="components/tl-card/voicemail.svg"> +1 (562) 726-2681</p>
                </main>
                <footer>
                    <a href="https://twitter.com/siliconwat"><svg class="social" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#575F60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                    <a href="https://youtube.com/@SiliconWat"><svg class="social" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#575F60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
                    <a href="https://www.facebook.com/siliconwat"><svg class="social" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#575F60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                    <a href="https://heartbank.fund/#SiliconWat"><svg class="social" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#575F60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path transform="rotate(45, 11, 11)" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></a>
                </footer>
            </section>
        </aside>
    </div>
`;

export default template;