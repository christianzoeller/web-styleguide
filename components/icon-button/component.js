class IconButton extends HTMLElement {
  static observedAttributes = ["icon", "href", "open-in-new-tab", "style"];

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(iconButtonTemplate.content.cloneNode(true));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const link = this.shadowRoot.querySelector("a");
    if (!link) return;

    switch (name) {
      case "icon":
        const span = link.querySelector("span");
        if (span && newValue) {
          span.textContent = newValue;
        }
        break;
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

customElements.define("icon-button", IconButton);
