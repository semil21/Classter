import { captureRejectionSymbol } from "events";
import classSchema from "../schemas/Class.Schema";
import { Request, Response } from "express";

const postClass = async (req: Request, res: Response) => {
  try {
    const saveData = await classSchema.create(req.body);
    if (saveData) {
      res.status(200).send({ response: saveData });
    } else {
      res.status(404).send({ response: "Failed to Save Current Class" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server Error" });
  }
};

const getClassData = async (req: Request, res: Response) => {
  try {
    const getData = await classSchema.find();
    if (getData) {
      res.status(200).send({ response: getData });
    } else {
      res.status(404).send({ response: "Failed To Find Classes" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server Error" });
  }
};

const updateClass = async (req: Request, res: Response) => {
  const { id } = req.params;
  const classData = req.body;
  try {
    const findClass = await classSchema.findByIdAndUpdate(
      { _id: id },
      classData,
      { new: true }
    );

    if (findClass) {
      res.status(200).send({ response: findClass });
    } else {
      res.status(404).send({ response: "Failed To Update Class Data" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server Error" });
  }
};

const deleteClass = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const findCLass = await classSchema.findByIdAndDelete({ _id: id });
    if (findCLass) {
      res.status(200).send({ response: "Class Deleted Successfully." });
    } else {
      res.status(404).send({ response: "Failed to Delete Class !" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server Error" });
  }
};

export default { postClass, getClassData, updateClass, deleteClass };
