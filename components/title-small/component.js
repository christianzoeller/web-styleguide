class TitleSmall extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(titleSmallTemplate.content.cloneNode(true));
  }
}

customElements.define("title-small", TitleSmall);
