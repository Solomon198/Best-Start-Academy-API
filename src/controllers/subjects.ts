import { Request, Response } from "express";
import {
  ProcessingError,
  ProcessingSuccess,
} from "../RequestStatus/status";
import models from "../models/index";

export async function CreateSubject(req: Request, res: Response) {
  try {
    const newSubject = new models.Subject(req.body);
    await newSubject.save({ validateBeforeSave: false });
    return ProcessingSuccess(res, newSubject.toObject());
  } catch {
    return ProcessingError(res);
  }
}

export async function UpdateSubject(req: Request, res: Response) {
  try {
    const { id, name } = req.body;
    const updatedSubject = await models.Subject.updateOne(
      { _id: id }, // eslint-disable-line
      { name },
      { new: true },
    );
    return ProcessingSuccess(res, updatedSubject);
  } catch {
    return ProcessingError(res);
  }
}

export async function GetAllSubjects(req: Request, res: Response) {
  try {
    const { searchQuery } = req.query;
    let result = [];
    if (searchQuery) {
      result = await models.Subject.find({
        $text: { $search: searchQuery as string },
      });
    } else {
      result = await models.Subject.find({});
    }

    return ProcessingSuccess(res, result);
  } catch {
    return ProcessingError(res);
  }
}

export async function DeleteSubject(req: Request, res: Response) {
  try {
    const { id } = req.body;
    await models.Subject.deleteOne({
      _id: id,
    });
    return ProcessingSuccess(res, {});
  } catch {
    return ProcessingError(res);
  }
}
