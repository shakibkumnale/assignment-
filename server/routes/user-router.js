import express from "express";
import { createdUser } from "../controller/createUser.js";
import { fetchUsers } from "../controller/fetchUsers.js";

const router = express.Router();
router.route('/user').post(createdUser);
router.route('/user').get(fetchUsers)

export {router};