class projectcard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    --mixed-border-color: color-mix(in srgb, var(--primary-color) 50%, var(--secondary-color) 50%);
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    border: 2px solid;
                    border-color: var(--mixed-border-color);
                    margin: 3em;
                    transition: transform 0.3s ease-in-out;
                }

                :host(:hover) {
                    transform: scale(1.05);
                }

                picture {
                    display: flex;
                    justify-content: center;
                }

                p {
                    margin: 3rem;
                    color: var(--text-color, #330066);
                }

                img {
                    margin: auto;
                    width: 130px;
                    height: 75px;
                }

                a {
                    background-color: var(--primary-color, #2E0854);
                    color: white;
                    border: 1px solid var(--secondary-color, #2E0854);
                    margin: .5em;
                }

                a:hover {
                    background-color: white;
                    color: var(--secondary-color);
                    border-color: var(--mixed-border-color);
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
            <picture>
                <!-- The <img> will be dynamically updated -->
            </picture>
            <p></p>
            <a target="_blank">Learn More</a>
        `;
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ["title", "description", "link", "picture"];
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        // Set the project title
        this.shadowRoot.querySelector("h2").textContent = this.getAttribute("title") || "Project Name";
    
        // Get the image source (expects PNG)
        const imageSrc = this.getAttribute("picture") || "placeholder.png"; // default to placeholder if no image is provided
        const pictureElement = this.shadowRoot.querySelector("picture");
    
        // Create the <img> element for the picture tag to support PNG images
        pictureElement.innerHTML = `
            <img src="${imageSrc}" alt="${this.getAttribute('title')}">
        `;
    
        // Set the project description
        this.shadowRoot.querySelector("p").textContent = this.getAttribute("description") || "No description available.";
    
        // Set the link URL
        this.shadowRoot.querySelector("a").href = this.getAttribute("link") || "#";
    }
    

}

customElements.define("project-card", projectcard);
