const template = document.createElement("template");

// Reference: https://codepen.io/mortezasharifinia/pen/QWMmYWw?editors=0110

template.innerHTML = `
    <link rel="stylesheet" href="components/tl-card/shadow.css">
    <div class="card">
        <section class="front">
            <header>
                <img src="components/tl-card/thonly.jpg">
            </header>
            <main>
                
            </main>
            <footer>
                front
            </footer>
        </section>
        <section class="back">
            <header>
                <img src="components/tl-card/thonly.jpg">
            </header>
            <main>
                
            </main>
            <footer>
                back
            </footer>
        </section>
    </div>
`;

export default template;