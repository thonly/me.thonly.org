import "/components/tl-body/element.mjs";

window.onload = event => {
    if (window.chrome) document.body.firstElementChild.style.display = "none";
    //document.querySelector('svg').setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LZFZMJEZTN');