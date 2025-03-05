class TitleMedium extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(titleMediumTemplate.content.cloneNode(true));
  }
}

customElements.define("title-medium", TitleMedium);
