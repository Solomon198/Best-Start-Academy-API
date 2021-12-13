import * as joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import {
  InvalidInputs,
  ProcessingError,
} from '../RequestStatus/status';

const requestBodySchema = joi.object({
  phoneNumber: joi.string().required().min(8),
  countryCode: joi.string().length(2).required(),
  firstName: joi.string().min(2).required(),
  lastName: joi.string().min(2).required(),
  gender: joi.string().required(),
  password: joi.string().min(8).required(),
  driverLicense: joi.string().allow('').optional(),
  taxiLicense: joi.string().optional().allow(''),
  driverLicensePhoto: joi.string().optional().allow(''),
  photo: joi.string().uri().required(),
  guarrantorInformation: joi.object({
    fullName: joi.string().required().min(5),
    phoneNumber: joi.string().required().min(8),
    address: joi.string().min(4).required(),
    ID: joi.string().min(6).optional().allow(''),
    email: joi.string().email().allow('').optional(),
    IDType: joi.string().optional().allow(''),
    placeOfWork: joi.string().allow('').optional(),
    positionAtWork: joi.string().allow('').optional(),
    addressOfPlaceOfWork: joi.string().allow('').optional(),
  }),
});

export default function ValidateDriverSignup(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { error } = requestBodySchema.validate(req.body);
    if (error) {
      return InvalidInputs(res, error.message);
    }
    next();
  } catch (e) {
    return ProcessingError(res);
  }
}
