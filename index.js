import "/components/tl-body/element.mjs";

window.onload = event => {
    document.querySelector('svg').setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
    if (window.chrome) document.body.firstElementChild.style.display = "none";
    if (!window.chrome) document.body.lastElementChild.style.display = "none";
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LZFZMJEZTN');