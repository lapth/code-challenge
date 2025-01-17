import { NextFunction, Request, Response } from "express";

/**
 * Common error handler.
 * 
 * @param error 
 * @param req 
 * @param res 
 * @param next 
 */
export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(`Error: ${error.message}`);
  res.status(500).json({ message: "Internal server error" });
};
