import teacherSchema from "../schemas/Teacher.Schema";
import { Request, response, Response } from "express";

const postTeacher = async (req: Request, res: Response) => {
  try {
    const saveTeacherData = await teacherSchema.create(req.body);
    if (saveTeacherData) {
      res.status(200).send({ response: saveTeacherData });
    } else {
      res.status(404).send({ response: "Not able to Add Current Teacher" });
    }
  } catch (error) {
    res.status(200).send({ response: error });
  }
};

const getTeacher = async (req: Request, res: Response) => {
  try {
    const getTeacherData = await teacherSchema.find();
    if (getTeacherData) {
      res.status(200).send({ response: getTeacherData });
    } else {
      res.status(404).send({ response: "Failed To Load Teacher's Data " });
    }
  } catch (error) {
    res.status(500).send({ response: "Server error" });
  }
};

const editTeacher = async (req: Request, res: Response) => {
  const { teacherId } = req.params;
  const teacherData = req.body;
  console.log("params :", teacherId);
  console.log("body :", teacherData);
  try {
    const findTeacher = await teacherSchema.findByIdAndUpdate(
      { _id: teacherId },
      teacherData,
      { new: true }
    );
    if (findTeacher) {
      res.status(200).send({ response: findTeacher });
    } else {
      res.status(404).send({ response: "Failed to Edit Teacher" });
    }
  } catch (error) {
    console.log("error :", error);
    res.status(500).send({ response: "Server Error" });
  }
};

const deleteTeacher = async (req: Request, res: Response) => {
  const { teacherId } = req.body;
  try {
    const deleteId = await teacherSchema.findByIdAndDelete({
      _id: teacherId,
    });
    if (deleteId) {
      res.status(200).send({ response: deleteId });
    } else {
      res.status(404).send({ response: "Failed to Delete Teacher" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server error" });
  }
};

export default { postTeacher, getTeacher, editTeacher, deleteTeacher };
