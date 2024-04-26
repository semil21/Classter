import express from "express";
import classController from "../controllers/class.controller";

const classRouter = express.Router();

classRouter.get("/", classController.getClassData);
classRouter.post("/add-class", classController.postClass);
classRouter.put("/edit-class/:id", classController.updateClass);
classRouter.delete("/delete-class/:id", classController.deleteClass);

export default classRouter;
