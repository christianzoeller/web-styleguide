class BorderedButton extends HTMLElement {
  static observedAttributes = [
    "href",
    "open-in-new-tab",
    "style",
    "leading-icon",
    "leading-icon-type",
    "trailing-icon",
    "trailing-icon-type",
  ];

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(borderedButtonTemplate.content.cloneNode(true));

    const link = shadowRoot.querySelector("a");
    if (link) {
      const icons = link.querySelectorAll("default-icon");
      if (icons && icons.length == 2) {
        icons[0].style.display = "none";
        icons[1].style.display = "none";
      }
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const link = this.shadowRoot.querySelector("a");
    if (!link) return;

    const icons = link.querySelectorAll("default-icon");
    const leadingIcon = icons[0];
    const trailingIcon = icons[1];

    const placeholderSizeClass = "h-32";
    const spacers = link.querySelectorAll("default-spacer");
    const leadingIconPlaceholder = spacers[1];
    const trailingIconPlaceholder = spacers[4];

    switch (name) {
      case "href":
        link.setAttribute("href", newValue);
        break;
      case "open-in-new-tab":
        const target = newValue === "true" ? "_blank" : "_self";
        link.setAttribute("target", target);
        break;
      case "style":
        this.classList.remove("primary", "secondary", "tertiary");
        if (newValue) {
          this.classList.add(newValue);
        }
        break;
      case "leading-icon":
        if (newValue && leadingIcon) {
          leadingIcon.setAttribute("icon", newValue);
          leadingIcon.style.display = "inline-block";
          if (
            leadingIconPlaceholder &&
            leadingIconPlaceholder.classList.contains(placeholderSizeClass)
          ) {
            leadingIconPlaceholder.classList.remove(placeholderSizeClass);
          }

          if (trailingIcon && trailingIconPlaceholder) {
            if (trailingIcon.style.display === "none") {
              trailingIconPlaceholder.classList.add(placeholderSizeClass);
            }
          }
        } else if (!newValue && leadingIcon) {
          leadingIcon.style.display = "none";
          if (leadingIconPlaceholder) {
            leadingIconPlaceholder.classList.add(placeholderSizeClass);
          }
        }
        break;
      case "leading-icon-type":
        if (newValue && leadingIcon) {
          leadingIcon.setAttribute("type", newValue);
        }
        break;
      case "trailing-icon":
        if (newValue && trailingIcon) {
          trailingIcon.setAttribute("icon", newValue);
          trailingIcon.style.display = "inline-block";
          if (
            trailingIconPlaceholder &&
            trailingIconPlaceholder.classList.contains(placeholderSizeClass)
          ) {
            trailingIconPlaceholder.classList.remove(placeholderSizeClass);
          }

          if (leadingIcon && leadingIconPlaceholder) {
            if (leadingIcon.style.display === "none") {
              leadingIconPlaceholder.classList.add(placeholderSizeClass);
            }
          }
        } else if (!newValue && trailingIcon) {
          trailingIcon.style.display = "none";
          if (trailingIconPlaceholder) {
            trailingIconPlaceholder.classList.add(placeholderSizeClass);
          }
        }
        break;
      case "trailing-icon-type":
        if (newValue && trailingIcon) {
          trailingIcon.setAttribute("type", newValue);
        }
        break;
    }
  }
}

customElements.define("bordered-button", BorderedButton);
