class MainContainer extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(mainContainerTemplate.content.cloneNode(true));
  }
}

customElements.define("main-container", MainContainer);
