import express from "express";
import { taskCreate } from "../src/task";

const router = express.Router();

router.post("/create", (req, res) => {
    const { taskName, status, tags, description} = req.body;
    return res.json(taskCreate(taskName, status, tags, description));
});

export default router;