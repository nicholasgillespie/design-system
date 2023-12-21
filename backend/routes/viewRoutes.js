/* IMPORT MODULE //////////////////// */
import express from "express";

/* IMPORT CONTROLLER //////////////////// */
import cw from "../utils/ctrlWrap.js";
import viewController from "../controllers/viewController.js";

/* ROUTER //////////////////// */
const router = express.Router();

/* ROUTES //////////////////// */
router.route("/").get(cw(viewController.getHome));
router.route("/colors").get(cw(viewController.getColors));
router.route("/typography").get(cw(viewController.getTypography));
router.route("/spacing").get(cw(viewController.getSpacing));
router.route("/compositions").get(cw(viewController.getCompositions));
router.route("/utilities").get(cw(viewController.getUtilities));

/* EXPORT //////////////////// */
export default router;
