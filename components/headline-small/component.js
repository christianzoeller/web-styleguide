class HeadlineSmall extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(headlineSmallTemplate.content.cloneNode(true));
  }
}

customElements.define("headline-small", HeadlineSmall);
