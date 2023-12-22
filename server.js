/* IMPORT MODULE //////////////////// */
import "./backend/utils/config.js";
import http from "http";

/* IMPORT APP //////////////////// */
import app from "./backend/app.js";

/* CREATE SERVER //////////////////// */
const server = http.createServer(app);
// const { PROTO, HOST, PORT } = process.env;
const port = process.env.PORT || 3000;

/* START SERVER //////////////////// */
server.listen(port, () => {
  const date = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });
  // console.log(`${date} - Application running at ${PROTO}://${HOST}:${PORT}`);
  console.log(`${date}`);
});
