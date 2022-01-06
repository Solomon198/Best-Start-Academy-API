import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingError,
  ProcessingSuccess,
} from '../RequestStatus/status';
import models from '../models/index';

export async function CreateResult(req: Request, res: Response) {
  try {
    const { regNo, student, session, record } = req.body;
    const newResult = new models.Result({
      regNo,
      student,
      session,
      record,
    });
    await newResult.save({ validateBeforeSave: false });
    return ProcessingSuccess(res, newResult.toObject());
  } catch (e) {
    console.log(e);
    return ProcessingError(res);
  }
}

export async function UpdateResult(req: Request, res: Response) {
  try {
    const { student, session, updates } = req.body;
    const updatedResult = await models.Result.updateOne(
      { student, session },
      updates,
      {
        new: true,
      },
    );
    return ProcessingSuccess(res, updatedResult);
  } catch (e) {
    return ProcessingError(res);
  }
}

export async function GetResult(req: Request, res: Response) {
  try {
    const { student, session } = req.query as any;
    const studenObj = Types.ObjectId(student);
    const getResult = await models.Result.findOne({
      student: studenObj,
      session,
    });

    return ProcessingSuccess(res, getResult);
  } catch (e) {
    return ProcessingError(res);
  }
}
