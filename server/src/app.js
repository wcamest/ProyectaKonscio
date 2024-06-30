import express from "express";
import staticPageRouter from "./api/routing/staticPage.router.js";
import contentRouter from "./api/routing/content.router.js";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use("/static_page", staticPageRouter);
app.use("/content", contentRouter)

export default app;
