class BorderedButton extends HTMLElement {
  static observedAttributes = ["href", "open-in-new-tab", "style"];

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(borderedButtonTemplate.content.cloneNode(true));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const link = this.shadowRoot.querySelector("a");
    if (!link) return;

    switch (name) {
      case "href":
        link.setAttribute("href", newValue);
        break;
      case "open-in-new-tab":
        const target = newValue === "true" ? "_blank" : "_self";
        link.setAttribute("target", target);
        break;
      case "style":
        this.classList.remove("primary", "secondary", "tertiary");
        if (newValue) {
          this.classList.add(newValue);
        }
        break;
    }
  }
}

customElements.define("bordered-button", BorderedButton);
