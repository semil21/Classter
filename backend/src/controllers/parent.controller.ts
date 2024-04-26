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

const searchParentsData = async (req: Request, res: Response) => {
  const { class: studentClass, division, name } = req.body;

  type PipelineStage = {
    $lookup?: {
      from: string;
      localField: string;
      foreignField: string;
      as: string;
    };
    $addFields?: {
      student_details: {
        $first: string;
      };
    };
    $match?: {
      "student_details.class"?: string;
      "student_details.division"?: object;
      "student_details.firstName"?: object;
    };
  };

  const pipeline: PipelineStage[] = [
    {
      $lookup: {
        from: "students",
        localField: "student",
        foreignField: "_id",
        as: "student_details",
      },
    },
    {
      $addFields: {
        student_details: {
          $first: "$student_details",
        },
      },
    },
  ];

  const matchStage: PipelineStage["$match"] = {
    "student_details.class": studentClass,
    "student_details.division": { $regex: new RegExp(division, "i") },
    "student_details.firstName": { $regex: new RegExp(name, "i") },
  };

  pipeline.push({
    $match: matchStage,
  });

  try {
    const parentsData = await parentSchema.aggregate(pipeline as any[]);

    if (parentsData && parentsData.length > 0) {
      res.status(200).send({ response: parentsData });
    } else {
      res.status(404).send({ response: "No matching data found" });
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
  searchParentsData,
};
