import express from "express";
import { tagCreate, tagEdit, tagDelete } from "../src/tag";

const router = express.Router();

router.post("/create", (req, res) => {
    const { tagName, colour, textColour } = req.body;
    return res.json(tagCreate(tagName, colour, textColour));
});

router.put("/edit", (req, res) => {
    const { tagId, tagName, colour, textColour } = req.body;
    return res.json(tagEdit(tagId, tagName, colour, textColour));
});

router.delete("/delete", (req, res) => {
    const { tagId } = req.query.params;
    return res.json(tagDelete(tagId));
});

export default router;