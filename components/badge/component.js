const badgeStyles = [
  "primary",
  "primary-variant",
  "secondary",
  "secondary-variant",
  "tertiary",
  "tertiary-variant",
];

class Badge extends HTMLElement {
  static observedAttributes = ["style"];

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(badgeTemplate.content.cloneNode(true));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "style":
        this.classList.remove(badgeStyles);
        if (newValue) {
          this.classList.add(newValue);
        }
        break;
    }
  }
}

customElements.define("default-badge", Badge);
