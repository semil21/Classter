import StudentSchema from "../schemas/Student.Schema";
import { Request, response, Response } from "express";
interface IAggregateStage {
  $match?: object;
  $sort?: object;
}

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

const searchStudent = async (req: Request, res: Response) => {
  const { className, division } = req.body;
  try {
    const aggregationPipeline = [
      {
        $match: {
          class: className,
          division: division,
        },
      },
    ];

    const filteredData = await StudentSchema.aggregate(aggregationPipeline);

    if (filteredData.length > 0) {
      res.status(200).send({ response: filteredData });
    } else {
      res.status(404).send({ response: "No matching records found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ response: "Server Error" });
  }
};

const filterStudent = async (req: Request, res: Response) => {
  const { classNumber, division: division, firstName, lastName } = req.body;

  try {
    const studentPipleline = [
      {
        $match: {
          class: classNumber,
          division: { $regex: new RegExp(division, "i") },
          firstName: { $regex: new RegExp(firstName, "i") },
          lastName: { $regex: new RegExp(lastName, "i") },
        },
      },
    ];

    const filterStudentData = await StudentSchema.aggregate(studentPipleline);

    if (filterStudentData) {
      res.status(200).send({ response: filterStudentData });
    } else {
      res.status(404).send({ response: "NO STUDENT FOUND" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server Error" });
  }
};

export default {
  postStudentData,
  getStuentsData,
  editStudnet,
  deleteStudent,
  searchStudent,
  filterStudent,
};
