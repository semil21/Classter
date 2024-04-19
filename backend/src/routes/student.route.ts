import express from "express";
import StudentController from "../controllers/student.controller";

const studentRouter = express.Router();

studentRouter.get("/", StudentController.getStuentsData);
studentRouter.post("/add-student", StudentController.postStudentData);
studentRouter.put("/edit-student/:studentId", StudentController.editStudnet);
studentRouter.delete(
  "/delete-student/:studentId",
  StudentController.deleteStudent
);

export default studentRouter;
