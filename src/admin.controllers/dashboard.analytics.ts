import { Request, Response } from 'express';
import {
  ProcessingError,
  ProcessingSuccess,
} from '../RequestStatus/status';
import models from '../models/index';
import Constants from '../constants/index';

export default async function DashboardAnalytics(
  req: Request,
  res: Response,
) {
  try {
    // users and drivers count
    const drivers = await models.Drivers.count();
    const users = await models.Users.count();

    // parcel information
    const totalDeliveries = await models.Parcel.count();
    const completedDeliveries = await models.Parcel.find({
      parcelStatus: Constants.Enums.DELIVERY_CONFIRMED,
    }).count();
    const cancelledDeliveries = await models.Parcel.find({
      parcelStatus: Constants.Enums.PARCEL_DELIVERY_CANCELLED,
    }).count();

    // show recent request for driver application
    const applications = await models.Drivers.find({
      isActivated: false,
    }).count();

    const response = {
      drivers,
      users,
      totalDeliveries,
      completedDeliveries,
      cancelledDeliveries,
      activeDeliveries: [],
      applications,
      environmentVariables: [],
    };

    return ProcessingSuccess(res, response);
  } catch (e) {
    return ProcessingError(res);
  }
}
