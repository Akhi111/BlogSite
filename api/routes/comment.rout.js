import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createComment, deleteComment } from "../controllers/comment.controller.js";
import { getPostComments } from "../controllers/comment.controller.js";
import { likeComment } from "../controllers/comment.controller.js";
import { editComment } from "../controllers/comment.controller.js";
import { getComments } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments/:postId", getPostComments); // dont need to call verifyToken because comments are for all users i.e publically
router.put("/likeComment/:commentId", verifyToken, likeComment);
router.put("/editComment/:commentId", verifyToken, editComment);
router.delete("/deleteComment/:commentId", verifyToken, deleteComment);
router.get("/getcomments", verifyToken, getComments);


export default router;
