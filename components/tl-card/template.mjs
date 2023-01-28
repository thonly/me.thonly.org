const template = document.createElement("template");

// Reference: https://codepen.io/nazarelen/pen/MedejB?editors=1100

template.innerHTML = `
    <link rel="stylesheet" href="components/tl-card/shadow.css">
    <div class="container">
        <aside class="card">
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
        </aside>
    </div>
`;

export default template;