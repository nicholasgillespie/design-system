import themeSwitch from "./theme-switch.js";
import buttonFocusHover from "./button-focus-hover.js";
import backToTopFocus from "./back-to-top-focus.js";

const app = {
  initialize() {
    themeSwitch.activate();
    buttonFocusHover.activate();
    backToTopFocus.activate();
  },
};

document.addEventListener("DOMContentLoaded", app.initialize);
