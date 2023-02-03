import "/components/tl-body/element.mjs";
import "/components/tl-card/element.mjs";

window.onload = event => document.querySelector('video').style.display = window.chrome ? 'block' : 'none';

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LZFZMJEZTN');