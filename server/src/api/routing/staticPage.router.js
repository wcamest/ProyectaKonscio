import { Router } from "express";
import StaticPageController from "../controller/staticPage.controller.js";
const router = Router();

router.get("/", StaticPageController.GetAll);
router.post("/", StaticPageController.Post);
router.put("/:id", StaticPageController.Put);
router.delete("/:id", StaticPageController.Delete);
router.get("/:id", StaticPageController.GetById);

export default router;