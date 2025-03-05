class BodyLarge extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(bodyLargeTemplate.content.cloneNode(true));
  }
}

customElements.define("body-large", BodyLarge);
