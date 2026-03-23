import express, {Router} from "express";
import branchesController from "../controllers/branchesController.js";

const router = express.Router();

router
    .route("/")
    .get(branchesController.getbranches)
    .post(branchesController.insertBranches);

    router
    .route("/:id")
    .put(branchesController.updateBranches)
    .delete(branchesController.delteBranches);

    export default router;
