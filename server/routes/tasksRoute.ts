import express from "express";
import { tasksList } from "../src/faketask";

const router = express.Router();

router.get("/list", (req, res) => {
    return res.json(tasksList());
});

export default router;