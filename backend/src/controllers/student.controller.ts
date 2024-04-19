import StudentSchema from "../schemas/Student.Schema";
import { Request, response, Response } from "express";

const postStudentData = async (req: Request, res: Response) => {
  try {
    const addStudent = await StudentSchema.create(req.body);

    if (addStudent) {
      res.status(200).send({ response: addStudent });
    } else {
      res.status(404).send({ response: "Faled To Add Student" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server Error, Failed To Add Student" });
  }
};

const getStuentsData = async (req: Request, res: Response) => {
  try {
    const getData = await StudentSchema.find();
    if (getData) {
      res.status(200).send({ response: getData });
    } else {
      res.status(404).send({ response: "Failed To Get Students Data" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server Error." });
  }
};

const editStudnet = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const studentData = req.body;

  try {
    const findStudent = await StudentSchema.findByIdAndUpdate(
      { _id: studentId },
      studentData,
      { new: true }
    );
    if (findStudent) {
      res.status(200).send({ response: findStudent });
    } else {
      res.status(404).send({ response: "Failed To Update Student" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server Error" });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  console.log("params :", studentId);
  try {
    const deleteRecord = await StudentSchema.findByIdAndDelete({
      _id: studentId,
    });
    if (deleteRecord) {
      res.status(200).send({ response: "Record Deleted Successfully" });
    } else {
      res.status(404).send({ response: "Failed to Delete Student Record" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server error" });
  }
};
export default { postStudentData, getStuentsData, editStudnet, deleteStudent };
