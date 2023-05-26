import express from "express";
import { tagCreate } from "../src/tag";

const router = express.Router();

router.post("/create", (req, res) => {
    const { tagName, colour } = req.body;
    return res.json(tagCreate(tagName, colour));
});

export default router;