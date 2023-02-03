const template = document.createElement("template");

// Reference: https://codepen.io/gigiyeh/pen/YpqQmJ

template.innerHTML = `
    <link rel="stylesheet" href="components/tl-body/shadow.css">
    <slot></slot>
    <aside>
        <div id="top-left" class="corner"></div>
        <div id="top-right" class="corner"></div>
        <div id="bottom-left" class="corner"></div>
        <div id="bottom-right" class="corner"></div>
        <img title="Copy URL" id="language" class="icon" src="components/tl-body/globe.svg" onclick="this.getRootNode().host.copy()">
        <a title="Share via Email" href="mailto:?cc=thonly@siliconwat.dev&bcc=thonly@heartbank.ceo&subject=Thon%20Ly%27s%20Business%20Card&body=Check%20out%20Thon%27s%20Business%20Card%20for%20a%20FREE%20Custom%20static%20website!%0A%0Ahttps://me.thonly.org"><img id="email" class="icon" src="components/tl-body/mail.svg"></a>
        <div title="Share via Facebook" class="fb-share-button" data-href="https://me.thonly.org" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fme.thonly.org%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><img id="facebook" class="icon" src="components/tl-body/facebook.svg"></a></div>
        <a title="Share via Twitter" target="_blank" class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Check%20out%20%40thonly%20Business%20Card%20for%20a%20FREE%20Custom%20static%20website!%0A%0A&url=https://me.thonly.org&hashtags=web,blockchain,ios,consultant"><img id="twitter" class="icon" src="components/tl-body/twitter.svg"></a>
        <figure>
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
            <div class="circle5"></div>
            <div class="circle6"></div>
            <div class="circle7"></div>
            <div class="circle8"></div>
        </figure>
        <div id="fb-root"></div>
    </aside>
    <script>
        window.twttr = (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);

            t._e = [];
            t.ready = function(f) {
                t._e.push(f);
            };
            return t;
        }(document, "script", "twitter-wjs"));
    </script>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0" nonce="kuWZUvKl"></script>
`;

export default template;