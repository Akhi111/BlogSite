import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createComment } from "../controllers/comment.controller.js";
import { getPostComments } from "../controllers/comment.controller.js";
import { likeComment } from "../controllers/comment.controller.js";
import { editComment } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments/:postId", getPostComments); // dont need to call verifyToken because comments are for all users i.e publically
router.put("/likeComment/:commentId", verifyToken, likeComment);
router.put("/editComment/:commentId", verifyToken, editComment);


export default router;
