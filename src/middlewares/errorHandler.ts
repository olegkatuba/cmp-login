import { NextFunction, Request, Response } from "express";
import HttpException from "../HttpException";

export default (err: HttpException, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.json({
      status: err.status || 500,
      errors: err.messages
  })
}