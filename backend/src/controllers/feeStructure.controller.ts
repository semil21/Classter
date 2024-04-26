import feeStructureSchema from "../schemas/feeStructure.Schema";
import { Request, response, Response } from "express";

const postFeeStrucure = async (req: Request, res: Response) => {
  try {
    const postData = await feeStructureSchema.create(req.body);
    if (postData) {
      res.status(200).send({ response: postData });
    } else {
      res.status(200).send({ response: "Fee Structure Not Added" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server Error" });
  }
};

const getFeeStructure = async (req: Request, res: Response) => {
  try {
    const getData = await feeStructureSchema.find();

    if (getData) {
      res.status(200).send({ respoonse: getData });
    } else {
      res.status(404).send({ response: "Failed to Get Fee Structure" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server Error" });
  }
};

const editFeeStructure = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const getData = await feeStructureSchema.findByIdAndUpdate(
      { _id: id },
      data,
      { new: true }
    );

    if (getData) {
      res.status(200).send({ response: getData });
    } else {
      res.status(404).send({ response: "Failed To Update Fee Structure" });
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

const deleteFeeStructure = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleteData = await feeStructureSchema.findByIdAndDelete({ _id: id });

    if (deleteData) {
      res.status(200).send({ response: "Fee Structure Deleted Successfully" });
    } else {
      res.status(404).send({ response: "Failed To Delete Fee Structure" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server Error" });
  }
};

const searchFeeStructure = async (req: Request, res: Response) => {
  const { className } = req.body;
  try {
    const searchPipeline = [
      {
        $match: {
          class: className,
        },
      },
    ];

    const feeStructure = await feeStructureSchema.aggregate(searchPipeline);

    if (feeStructure) {
      res.status(200).send({ response: feeStructure });
    } else {
      res.status(404).send({ response: "No Class Found" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server Error" });
  }
};

export default {
  postFeeStrucure,
  getFeeStructure,
  editFeeStructure,
  deleteFeeStructure,
  searchFeeStructure,
};
