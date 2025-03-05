class BodyMedium extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(bodyMediumTemplate.content.cloneNode(true));
  }
}

customElements.define("body-medium", BodyMedium);
