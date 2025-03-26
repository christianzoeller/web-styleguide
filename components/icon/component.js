const iconTypes = ["default", "round", "rounded-square"];

const iconStyles = [
  "primary",
  "primary-inverted",
  "secondary",
  "secondary-inverted",
  "tertiary",
  "tertiary-inverted",
];

class Icon extends HTMLElement {
  static observedAttributes = ["icon", "type", "style", "hover-disabled"];

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(iconTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    const span = this.shadowRoot.querySelector("span");
    if (!span) return;

    span.classList.add(iconTypes[0]);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const span = this.shadowRoot.querySelector("span");
    if (!span) return;

    switch (name) {
      case "icon":
        if (newValue) {
          span.textContent = newValue;
        }
        break;
      case "type":
        span.classList.remove(...iconTypes);
        if (newValue) {
          span.classList.add(newValue);
        }
        break;
      case "style":
        this.classList.remove(...iconStyles);
        if (newValue) {
          this.classList.add(newValue);
        }
        break;
      case "hover-disabled":
        span.classList.remove("hover-disabled");
        if (newValue === "true") {
          span.classList.add("hover-disabled");
        }
        break;
    }
  }
}

customElements.define("default-icon", Icon);
