import { Router } from 'express';
import {
  CreateSubject,
  DeleteSubject,
  UpdateSubject,
  GetAllSubjects,
} from '../controllers/subjects';

const Subject = Router();

Subject.post('/', CreateSubject);

Subject.put('/', UpdateSubject);

Subject.delete('/', DeleteSubject);

Subject.get('/', GetAllSubjects);

export default Subject;
