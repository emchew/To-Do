import express from "express";
import { tasksList } from "../src/task";

const router = express.Router();

router.get("/list", (req, res) => {
    return res.json(tasksList());
});

export default router;