class Card extends HTMLElement {
  static observedAttributes = ["style"];

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "style":
        this.classList.remove("primary", "secondary", "tertiary");
        if (newValue) {
          this.classList.add(newValue);
        }
        break;
    }
  }
}

customElements.define("default-card", Card);
