class projectcard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    border: 2px solid var(--secondary-color, #2E0854);
                    padding: 20px;
                    margin: 15px;
                    border-radius: 12px;
                    background-color: var(--primary-color, #D8BFD8);
                    color: var(--text-color, #330066);
                    text-align: center;
                    max-width: 300px;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease-in-out;
                }

                :host(:hover) {
                    transform: scale(1.05);
                }

                h2 {
                    font-size: 1.5em;
                    font-weight: bold;
                    margin: 10px 0;
                }

                img {
                    width: 100%;
                    height: auto;
                    border-radius: 5px;
                    border: 2px solid var(--secondary-color, #2E0854);
                    object-fit: cover;
                }

                p {
                    font-size: 1em;
                    margin: 10px 0;
                    color: var(--text-color, #330066);
                }

                a {
                    display: inline-block;
                    padding: 10px 15px;
                    margin-top: 15px;
                    background-color: var(--secondary-color, #2E0854);
                    color: white;
                  
                    border-radius: 12px;
                    border: 2px solid var(--secondary-color, #2E0854);
                    font-weight: bold;
                   
                }

                a:hover {
                    background-color: white;
                    color: var(--secondary-color, #2E0854);
                    border-color: var(--secondary-color, #2E0854);
                }

                @media (max-width: 600px) {
                    :host {
                        padding: 15px;
                        margin: 10px;
                        max-width: 90%;
                    }

                    h2 {
                        font-size: 1.2em;
                    }
                }
            </style>

            <h2></h2>
            <img />
            <p></p>
            <a target="_blank">Learn More</a>
        `;
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ["title", "image", "description", "link"];
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.querySelector("h2").textContent = this.getAttribute("title") || "Project Name";
        this.shadowRoot.querySelector("img").src = this.getAttribute("image") || "placeholder.jpg";
        this.shadowRoot.querySelector("img").alt = this.getAttribute("title") || "Project image";
        this.shadowRoot.querySelector("p").textContent = this.getAttribute("description") || "No description available.";
        this.shadowRoot.querySelector("a").href = this.getAttribute("link") || "#";
    }
}

customElements.define("project-card", projectcard);
