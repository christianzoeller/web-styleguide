class ButtonContainer extends HTMLElement {
  static observedAttributes = ["restrict-width-on-desktop"];

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(buttonContainerTemplate.content.cloneNode(true));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "restrict-width-on-desktop":
        if (newValue === "true") {
          this.shadowRoot.querySelector("style").textContent += `
            @media only screen and (min-width: 992px) {
                .button-container {
                  max-width: 808px;
                }
            }
            `;
        }
        break;
    }
  }
}

customElements.define("button-container", ButtonContainer);
