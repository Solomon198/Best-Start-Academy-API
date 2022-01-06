import { Router } from 'express';
import {
  CreateResult,
  UpdateResult,
  GetResult,
} from '../admin.controllers/process.result';
import constants from '../constants/index';

const { RESULT } = constants.RouteBase;
const card = Router();

card.get('/', GetResult);
card.post('/', CreateResult);
card.put('/', UpdateResult);

export default card;
