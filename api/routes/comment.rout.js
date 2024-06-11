import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createComment } from "../controllers/comment.controller.js";
import { getPostComments } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments/:postId", getPostComments); // dont need to call verifyToken because comments are for all users i.e publically


export default router;