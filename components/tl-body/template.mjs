const template = document.createElement("template");

// Reference: https://codepen.io/gigiyeh/pen/YpqQmJ

template.innerHTML = `
    <link rel="stylesheet" href="components/tl-body/shadow.css">
    <slot></slot>
    <div id="top-left" class="corner"></div>
    <div id="top-right" class="corner"></div>
    <div id="bottom-left" class="corner"></div>
    <div id="bottom-right" class="corner"></div>
    <img id="language" class="icon" src="components/tl-body/globe.svg">
    <img id="email" class="icon" src="components/tl-body/mail.svg">
    <img id="facebook" class="icon" src="components/tl-body/facebook.svg">
    <img id="twitter" class="icon" src="components/tl-body/twitter.svg">
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="circle4"></div>
    <div class="circle5"></div>
    <div class="circle6"></div>
    <div class="circle7"></div>
    <div class="circle8"></div>
`;

export default template;