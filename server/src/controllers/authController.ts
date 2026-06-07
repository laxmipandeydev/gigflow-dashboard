import { Request, Response } from "express";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User";

export const registerUser = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      email,
      password,
      role,
    } = req.body;

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    const userWithoutPassword = {
  _id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
};
   res.status(201).json({
  message: "User registered successfully",
  user: userWithoutPassword,
});
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const loginUser = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d",
      }
    );
    const userWithoutPassword = {
  _id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
};
    res.status(200).json({
  message: "Login successful",
  token,
  user: userWithoutPassword,
});
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};
export const getEmployees = async (
  req: Request,
  res: Response
) => {
  try {

    const employees =
      await User.find()
      .select("-password");

    res.status(200).json(
      employees
    );

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }
};
export const createEmployee = async (
  req: Request,
  res: Response
) => {
  try {

    const {
      name,
      email,
      password,
      role,
    } = req.body;

if (
 !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
 .test(email)
) {
 return res.status(400).json({
   message:
   "Invalid email format",
 });
}

const existingUser =
  await User.findOne({
    email,
  });
    {
 return res.status(400).json({
   message:
   "Invalid email format",
 });
}
    if (existingUser) {

      return res.status(400).json({
        message:
          "Employee already exists",
      });

    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    const employee =
      await User.create({
        name,
        email,
        password:
          hashedPassword,
        role,
      });

  const employeeWithoutPassword = {
  _id: employee._id,
  name: employee.name,
  email: employee.email,
  role: employee.role,
};

res.status(201).json({
  message:
    "Employee created successfully",
  employee:
    employeeWithoutPassword,
});
  } catch (error) {

    res.status(500).json({
      message:
        "Server Error",
    });

  }
};

export const updateEmployee = async (
  req: Request,
  res: Response
) => {
  try {

    const { id } = req.params;

    const { name, role } =
      req.body;

    const employee =
      await User.findByIdAndUpdate(
        id,
        {
          name,
          role,
        },
        {
          new: true,
        }
      ).select("-password");

    if (!employee) {

      return res.status(404).json({
        message:
          "Employee not found",
      });

    }

    res.status(200).json({
      message:
        "Employee updated successfully",
      employee,
    });

  } catch (error) {

    res.status(500).json({
      message:
        "Server Error",
    });

  }
};
export const deleteEmployee = async (
  req: Request,
  res: Response
) => {
  try {

    const { id } = req.params;

    const employee =
      await User.findByIdAndDelete(id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.status(200).json({
      message:
        "Employee deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }
};
export const resetEmployeePassword =
async (
  req: Request,
  res: Response
) => {

  try {

    const { id } =
      req.params;

    const {
      password,
    } = req.body;

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    const employee =
      await User.findByIdAndUpdate(
        id,
        {
          password:
            hashedPassword,
        },
        {
          new: true,
        }
      );

    if (!employee) {

      return res.status(404).json({
        message:
          "Employee not found",
      });

    }

    res.status(200).json({
      message:
        "Password updated successfully",
    });

  } catch (error) {

    res.status(500).json({
      message:
        "Server Error",
    });

  }

};