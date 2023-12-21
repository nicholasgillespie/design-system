const buttonFocusHover = {
  // DOM ELEMENTS
  darkModeButtons: document.querySelectorAll(".b-button"),
  needJsElements: document.querySelectorAll(".u-need-js"),

  // DATA

  // FUNCTIONS
  // PRIMARY
  activate() {
    this.removeNeedJsClass();

    this.darkModeButtons.forEach((button) => {
      button.addEventListener("mouseenter", function () {
        delete this.dataset.focus;
      });

      button.addEventListener("mouseleave", function () {
        if (document.activeElement === this) {
          this.dataset.focus = "remove";
          this.blur();
        }
      });
    });
  },

  // SECONDARY
  removeNeedJsClass() {
    this.needJsElements.forEach((element) => {
      element.classList.remove("u-need-js");
    });
  },
};

export default buttonFocusHover;
