import express from "express";
import { tagsList } from "../src/tag";

const router = express.Router();

router.get("/list", (req, res) => {
    console.log(tagsList());
    console.log("im trying i swear")
    return res.json(tagsList());
});

export default router;