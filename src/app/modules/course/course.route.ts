import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseControllers } from './course.controller';
import { CourseValidations } from './course.validation';

const router = express.Router();

router.post(
  '/create-course',
  validateRequest(CourseValidations.createCourseValidation),
  CourseControllers.createCourse,
);

router.get('/', CourseControllers.getAllCourses);

router.get('/:id', CourseControllers.findSingleCourse);

router.patch(
  '/:id',
  validateRequest(CourseValidations.updateCourseValidation),
  CourseControllers.updateCourse,
);

router.delete('/:id', CourseControllers.deleteSingleCourse);

router.put(
  '/courseId/assign-faculties',
  validateRequest(CourseValidations.facultiesWithCourseValidationSchema),
  CourseControllers.assignFacultiesWithCourse,
);

router.delete(
  '/courseId/remove-faculties',
  validateRequest(CourseValidations.facultiesWithCourseValidationSchema),
  CourseControllers.removeFacultiesFromCourse,
);

export const CourseRoutes = router;
