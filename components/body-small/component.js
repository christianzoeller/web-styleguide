class BodySmall extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(bodySmallTemplate.content.cloneNode(true));
  }
}

customElements.define("body-small", BodySmall);
