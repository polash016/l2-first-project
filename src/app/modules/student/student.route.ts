import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getStudents);
router.get('/:id', StudentController.findStudent);

export const StudentRoutes = router;
