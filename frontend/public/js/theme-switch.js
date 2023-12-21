const themeSwitch = {
  // DOM ELEMENTS
  themeButtons: document.querySelectorAll(".js-theme-toggle"),
  needJsElements: document.querySelectorAll(".u-need-js"),

  // DATA
  systemThemeMatcher: window.matchMedia("(prefers-color-scheme: dark)"),
  localTheme: localStorage.getItem("theme"),
  currentTheme:
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"),

  // FUNCTIONS
  // PRIMARY
  activate() {
    this.removeNoJsClass();

    if (this.localTheme) {
      const systemTheme = this.systemThemeMatcher.matches ? "dark" : "light";
      if (this.localTheme !== systemTheme) {
        this.setTheme(this.localTheme);
      }

      this.systemThemeMatcher.addEventListener("change", (e) => {
        const newSystemTheme = e.matches ? "dark" : "light";
        if (
          this.currentTheme !== newSystemTheme &&
          this.localTheme !== newSystemTheme
        ) {
          this.setTheme(this.localTheme);
        }
        this.updateButtonContent();
      });
    }

    this.themeButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const newTheme = this.currentTheme === "light" ? "dark" : "light";
        this.setTheme(newTheme);
        this.themeButtons.forEach((btn) => {
          btn.textContent = newTheme === "light" ? "Dark Mode" : "Light Mode";
        });
        this.updateButtonContent();
      });
    });

    this.updateButtonContent();
  },

  // SECONDARY
  removeNoJsClass() {
    this.needJsElements.forEach((element) => {
      element.classList.remove("u-no-js");
    });
  },

  setTheme(theme) {
    this.currentTheme = theme;
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  },

  updateButtonContent() {
    const buttonText =
      this.currentTheme === "light" ? "Dark Mode" : "Light Mode";
    this.themeButtons.forEach((button) => {
      button.textContent = buttonText;
    });
  },
};

export default themeSwitch;
