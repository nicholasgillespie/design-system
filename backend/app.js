/* IMPORT MODULE //////////////////// */
import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import slugify from "./utils/slugify.js";

/* IMPORT ROUTERS & CONTROLLERS //////////////////// */
import viewRouter from "./routes/viewRoutes.js";

/* DIRECTORIES */
const __rootDir = path.resolve(fileURLToPath(import.meta.url), "..", "..");
const __frontend = path.join(__rootDir, "frontend");

/* START REQ/RES CYCLE //////////////////// */
const app = express(); /* creates express app */

/* SET VIEW ENGINE & VIEWS LOCATION //////////////////// */
app.set("view engine", "ejs"); /* sets view engine to ejs */
app.set("views", path.join(__frontend, "views")); /* sets views directory */
app.use(
  express.static(path.join(__frontend, "public"))
); /* sets static assets directory */

/* LOCAL MIDDLEWARE //////////////////// */
app.use((req, res, next) => {
  console.log("Request received");
  next();
});

/* MOUNT ROUTE //////////////////// */
app.use("/", viewRouter);

/* UNHANDLED ROUTE //////////////////// */
app.use("*", (req, res) => {
  const title = "404";
  const description =
    "Oops! The page you're looking for in our Design System doesn't exist. Please check the URL or return to our homepage to continue exploring the system.";
  const slug = slugify(title);
  res.status(404).render("template", {
    title,
    description,
    slug,
  });
});

/* EXPORT //////////////////// */
export default app;
