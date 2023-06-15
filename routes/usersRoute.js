import express from "express";
import {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default { router, path: "/api/users" };
