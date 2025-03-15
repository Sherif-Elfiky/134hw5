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
                    border-color: --mixed-border-color;
                    margin: 3em;
                    transition: transform 0.3s ease-in-out;
                 
                    
                    
                    
                    
                }

                :host(:hover) {
                    transform: scale(1.05);
                }

                

              

                p {
                    margin: 3rem;
                  
                    color: var(--text-color, #330066);
                }

                img {
                    margin: auto;
                    width: 90px;
                    height: 50px;

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
