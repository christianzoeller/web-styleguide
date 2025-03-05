class HeadlineLarge extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(headlineLargeTemplate.content.cloneNode(true));
  }
}

customElements.define("headline-large", HeadlineLarge);
