import express from "express";

import {
  registerUser,
  loginUser,
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  resetEmployeePassword,
} from "../controllers/authController";

const router = express.Router();

router.post(
  "/register",
  registerUser
);
router.post(
  "/login",
  loginUser
);
router.get(
  "/employees",
  getEmployees
);
router.post(
  "/employees",
  createEmployee
);
router.put(
  "/employees/:id",
  updateEmployee
);
router.delete(
  "/employees/:id",
  deleteEmployee
);
router.put(
  "/employees/reset-password/:id",
  resetEmployeePassword
);
export default router;