const spacerSizes = [
  "h-4",
  "h-8",
  "h-12",
  "h-16",
  "h-24",
  "h-32",
  "h-48",
  "h-64",
  "v-4",
  "v-8",
  "v-12",
  "v-16",
  "v-24",
  "v-32",
  "v-48",
  "v-64",
];

class Spacer extends HTMLElement {
  static observedAttributes = ["size-class"];

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(spacerTemplate.content.cloneNode(true));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "size-class":
        this.classList.remove(...spacerSizes);
        if (newValue) {
          this.classList.add(newValue);
        }
        break;
    }
  }
}

customElements.define("default-spacer", Spacer);
