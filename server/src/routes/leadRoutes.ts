import express from "express";

import {
  createLead,
  getLeads,
  deleteLead,
} from "../controllers/leadController";

const router = express.Router();

router.get("/", getLeads);
router.post("/", createLead);
router.delete("/:id", deleteLead);

export default router;