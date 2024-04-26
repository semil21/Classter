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
studentRouter.post("/search-student", StudentController.searchStudent);
studentRouter.post("/filter-student", StudentController.filterStudent);

export default studentRouter;
