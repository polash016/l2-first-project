import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();

// router.post('/create-student', StudentController.createStudent);

router.get('/', StudentController.getStudents);

router.get('/:id', StudentController.findSingleStudent);

router.patch(
  '/:id',
  validateRequest(updateStudentValidationSchema),
  StudentController.updateStudent,
);

router.delete('/:id', StudentController.deleteSingleStudent);

export const StudentRoutes = router;
