import express from "express";
import teacherController from "../controllers/teacher.controller";

const teacherRouter = express.Router();

teacherRouter.get("/", teacherController.getTeacher);
teacherRouter.post("/add-teacher", teacherController.postTeacher);
teacherRouter.put("/edit-teacher/:teacherId", teacherController.editTeacher);
teacherRouter.delete("/delete-teacher", teacherController.deleteTeacher);

export default teacherRouter;
