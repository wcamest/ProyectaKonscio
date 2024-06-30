import { Router } from "express";
import ContentController from "../controller/content.controller.js";

const router = Router();

router.get("/", ContentController.GetAll);
router.post("/", ContentController.Post);
router.put("/:id", ContentController.Put);
router.delete("/:id", ContentController.Delete);
router.get("/:id", ContentController.GetById);
router.get("/permalink/:permalink", ContentController.GetByPermalink)

export default router;