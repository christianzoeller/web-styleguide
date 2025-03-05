class TitleLarge extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(titleLargeTemplate.content.cloneNode(true));
  }
}

customElements.define("title-large", TitleLarge);
