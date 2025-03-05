class CardContainer extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(cardContainerTemplate.content.cloneNode(true));
  }
}

customElements.define("card-container", CardContainer);
