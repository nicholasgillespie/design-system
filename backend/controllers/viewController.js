/* IMPORTS //////////////////// */
import slugify from "../utils/slugify.js";

/* EXPORT //////////////////// */
export default {
  // PUBLIC
  async getHome(req, res, next) {
    const title = "Welcome";
    const description =
      "Explore our design system featuring CSS structure, design tokens, typography, spacing rules, and a component library. Learn about our use of CUBE CSS and SCSS for efficient style management.";
    const slug = slugify(title);
    res.status(200).render("template", {
      title,
      description,
      slug,
    });
  },

  async getColors(req, res, next) {
    const title = "Colors";
    const description =
      "Discover the color palette and learn how color is used in the design system to create a consistent and visually appealing user interface.";
    const slug = slugify(title);
    res.status(200).render("template", {
      title,
      description,
      slug,
    });
  },

  async getTypography(req, res, next) {
    const title = "Typography";
    const description =
      "Explore the typography rules and learn how font families and sizes are used to ensure readability and consistency across the design system.";
    const slug = slugify(title);
    console.log("slug", slug);
    res.status(200).render("template", {
      title,
      description,
      slug,
    });
  },

  async getSpacing(req, res, next) {
    const title = "Spacing";
    const description =
      "Learn about the spacing system and how it is used to create a balanced layout and improve the overall user experience in the design system.";
    const slug = slugify(title);
    res.status(200).render("template", {
      title,
      description,
      slug,
    });
  },

  async getCompositions(req, res, next) {
    const title = "Compositions";
    const description =
      "Discover the composition rules and learn how they are used to create flexible and reusable components in the design system.";
    const slug = slugify(title);
    res.status(200).render("template", {
      title,
      description,
      slug,
    });
  },

  async getUtilities(req, res, next) {
    const title = "Utilities";
    const description =
      "Explore the utility classes and learn how they provide quick and easy styling solutions for common design patterns in the design system.";
    const slug = slugify(title);
    res.status(200).render("template", {
      title,
      description,
      slug,
    });
  },
};
