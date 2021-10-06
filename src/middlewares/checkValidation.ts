import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import HttpException from "../HttpException";

export default (errorStatus: number = 400) =>
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next(new HttpException(errorStatus, errors.array()));
    }
    next();
  };
