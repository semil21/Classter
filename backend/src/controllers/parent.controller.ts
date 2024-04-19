import parentSchema from "../schemas/Parents.Schema";
import { Request, Response } from "express";

const postParentsData = async (req: Request, res: Response) => {
  try {
    const saveParentData = await parentSchema.create(req.body);

    if (saveParentData) {
      res.status(200).send({ response: saveParentData });
    } else {
      res.status(404).send({ response: "Faled To Save Parents Data" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server Error !" });
  }
};

const getParentsData = async (req: Request, res: Response) => {
  try {
    const parensData = await parentSchema.find().populate("student");
    if (parensData) {
      res.status(200).send({ response: parensData });
    } else {
      res.status(200).send({ response: "Failed TO Get Parents Data" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server Error" });
  }
};

const updateParentData = async (req: Request, res: Response) => {
  const { parentId } = req.params;
  const parentData = req.body;
  try {
    const updateParent = await parentSchema.findByIdAndUpdate(
      { _id: parentId },
      parentData,
      { new: true }
    );

    if (updateParent) {
      res.status(200).send({ response: updateParent });
    } else {
      res.status(404).send({ response: "Failed to Update Parent" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server Error" });
  }
};

const deleteParentData = async (req: Request, res: Response) => {
  const { parentId } = req.params;
  try {
    const deleteParent = await parentSchema.findByIdAndDelete({
      _id: parentId,
    });
    if (deleteParent) {
      res.status(200).send({ response: "Record Deleted Succesfully" });
    } else {
      res.status(404).send({ response: "Failed To Record Deleted " });
    }
  } catch (error) {
    res.status(500).send({ response: "Server Error" });
  }
};

export default {
  postParentsData,
  getParentsData,
  updateParentData,
  deleteParentData,
};
