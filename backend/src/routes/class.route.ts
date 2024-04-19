import express from "express";
import classController from "../controllers/class.controller";

const classRouter = express.Router();

classRouter.get("/", classController.getClassData);
classRouter.post("/add-class", classController.postClass);

export default classRouter;
