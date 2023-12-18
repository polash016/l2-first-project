import { z } from 'zod';

const createPreRequisiteCoursesValidation = z.object({
  course: z.string({
    required_error: 'Course code required',
  }),
  isDeleted: z.boolean().default(false).optional(),
});

const updatePreRequisiteCoursesValidation = z.object({
  course: z.string().optional(),
  isDeleted: z.boolean().optional(),
});
const createCourseValidation = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    prefix: z.string({ required_error: 'Prefix is required' }),
    code: z.number({ required_error: 'Code is required' }),
    credits: z.number({ required_error: 'Credits is required' }),
    preRequisiteCourses: z
      .array(createPreRequisiteCoursesValidation)
      .optional(),
  }),
  isDeleted: z.boolean().default(false).optional(),
});

const updateCourseValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    prefix: z.string().optional(),
    code: z.number().optional(),
    credits: z.number().optional(),
    preRequisiteCourses: z
      .array(updatePreRequisiteCoursesValidation)
      .optional(),
  }),
  isDeleted: z.boolean().optional(),
});

const facultiesWithCourseValidationSchema = z.object({
  body: z.object({
    faculties: z.array(z.string()),
  }),
});

export const CourseValidations = {
  createCourseValidation,
  updateCourseValidation,
  facultiesWithCourseValidationSchema,
};
