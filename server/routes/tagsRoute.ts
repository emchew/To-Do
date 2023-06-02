import express from "express";
import { tagsList } from "../src/faketag";

const router = express.Router();

router.get("/list", (req, res) => {
    return res.json(tagsList());
});

export default router;