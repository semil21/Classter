import parentController from "../controllers/parent.controller";
import express from "express";

const parentRouter = express.Router();

parentRouter.get("/", parentController.getParentsData);
parentRouter.post("/add-parent", parentController.postParentsData);
parentRouter.put("/edit-parent/:parentId", parentController.updateParentData);
parentRouter.delete(
  "/delete-parent/:parentId",
  parentController.deleteParentData
);
parentRouter.post("/search-parent", parentController.searchParentsData);

export default parentRouter;
