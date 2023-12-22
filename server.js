/* IMPORT MODULE //////////////////// */
import "./backend/utils/config.js";
import http from "http";

/* IMPORT APP //////////////////// */
import app from "./backend/app.js";

/* CREATE SERVER //////////////////// */
const server = http.createServer(app);
const { SITE_PROTO, SITE_HOST, SITE_PORT } = process.env;
const port = SITE_PORT || 3000;

/* START SERVER //////////////////// */
server.listen(port, () => {
  const date = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });
  console.log(
    `${date} - Application running at ${SITE_PROTO}://${SITE_HOST}:${SITE_PORT}`
  );
});
