class HeadlineMedium extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(headlineMediumTemplate.content.cloneNode(true));
  }
}

customElements.define("headline-medium", HeadlineMedium);
