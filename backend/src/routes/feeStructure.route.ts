import feeStructureController from "../controllers/feeStructure.controller";
import express from "express";

const feeStructureRouter = express.Router();

feeStructureRouter.get("/", feeStructureController.getFeeStructure);
feeStructureRouter.post("/add-fees", feeStructureController.postFeeStrucure);
feeStructureRouter.put(
  "/edit-fees/:id",
  feeStructureController.editFeeStructure
);
feeStructureRouter.delete(
  "/delete-fees/:id",
  feeStructureController.deleteFeeStructure
);
feeStructureRouter.post(
  "/search-fees",
  feeStructureController.searchFeeStructure
);

export default feeStructureRouter;
