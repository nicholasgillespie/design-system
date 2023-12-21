const backToTopFocus = {
  // DOM ELEMENTS
  backToTopButton: document.querySelector(".b-back-to-top"),

  // FUNCTIONS
  backToTopOnTab() {
    this.backToTopButton.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.scrollTo(0, 0);
        // Set focus to the first  header
        const firstHeader = document.querySelector("h1, h2, h3, h4, h5, h6");
        if (firstHeader) {
          firstHeader.tabIndex = -1;
          firstHeader.focus();
        }
      }
    });
  },

  // PRIMARY
  activate() {
    this.backToTopOnTab();
  },
};

export default backToTopFocus;
