import { Request, Response, NextFunction } from "express";
import { Schema } from "joi"; // Import the appropriate type from 'joi'
import jwt from "jsonwebtoken";

export const validate = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(500).json({message: error.details[0].message})
      return;
    }
    next();
  };
};

export const authenticateToken = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const token = req.header("Authorization")?.split(" ")[1];
  
    if (!token) {
      res.status(401).json({ message: "Access denied. Token missing." });
      return;
    }
  
    try {
      const decoded = jwt.verify(token, "nacfuu-cafhcuhuacfnhacf-ulsdkoxf");
      req.user = decoded;
      next();
    } catch (error) {
      res.status(403).json({ message: "Invalid token." });
    }
  };

