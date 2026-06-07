import { Request, Response } from "express";
import Lead from "../models/Lead";

export const createLead = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, email, status, source } = req.body;

    const existingLead = await Lead.findOne({ email });

    if (existingLead) {
      return res.status(400).json({
        message: "Lead already exists",
      });
    }

    const lead = await Lead.create({
      name,
      email,
      status,
      source,
    });

    res.status(201).json({
      message: "Lead created successfully",
      lead,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getLeads = async (
  req: Request,
  res: Response
) => {
  try {
    const leads = await Lead.find().sort({
      createdAt: -1,
    });

    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const deleteLead = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const lead = await Lead.findByIdAndDelete(id);

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    res.status(200).json({
      message: "Lead deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};