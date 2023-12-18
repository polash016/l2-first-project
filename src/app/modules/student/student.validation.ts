import { z } from 'zod';

// Define Zod schemas for each sub-schema
const userNameSchema = z.object({
  firstName: z
    .string({ required_error: 'First Name is required' })
    .max(20, { message: "First Name can't be more than 20 characters" }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: 'Last Name is required' }),
});

const guardianSchema = z.object({
  fatherName: z.string({ required_error: 'Father Name is required' }),
  fatherOccupation: z.string({
    required_error: 'Father Occupation is required',
  }),
  fatherContactNo: z.string({
    required_error: "Father's Contact Number is required",
  }),
  motherName: z.string({ required_error: 'Mother Name is required' }),
  motherOccupation: z.string({
    required_error: 'Mother Occupation is required',
  }),
  motherContactNo: z.string({
    required_error: 'Mother Contact Number is required',
  }),
});

const localGuardianSchema = z.object({
  name: z.string({ required_error: 'Local Guardian Name is required' }),
  occupation: z.string({
    required_error: 'Local Guardian Occupation is required',
  }),
  contactNo: z.string({
    required_error: 'Local Guardian Contact Number is required',
  }),
  address: z.string({ required_error: 'Local Guardian Address is required' }),
});

// Define the main Zod schema for the student
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    student: z.object({
      name: userNameSchema,
      gender: z.enum(['male', 'female', 'other']),
      email: z
        .string({ required_error: 'Email is required' })
        .email({ message: 'Invalid email format' }),
      dateOfBirth: z.string(),
      contactNo: z.string({ required_error: 'Contact No. is required' }),
      emergencyContactNo: z.string({
        required_error: 'Emergency Contact is required',
      }),
      bloodGroup: z
        .enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string({ required_error: 'Email is required' }),
      permanentAddress: z.string({ required_error: 'Email is required' }),
      guardian: guardianSchema,
      localGuardian: localGuardianSchema,
      profileImg: z.string(),
    }),
  }),
});

const updateUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

const updateGuardianValidationSchema = z.object({
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherContactNo: z.string().optional(),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().optional(),
});

const updateLocalGuardianValidationSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional(),
});

export const updateStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: updateUserNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']).optional(),
      dateOfBirth: z.string().optional(),
      email: z.string().email().optional(),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      bloogGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      guardian: updateGuardianValidationSchema.optional(),
      localGuardian: updateLocalGuardianValidationSchema.optional(),
      admissionSemester: z.string().optional(),
      profileImg: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
});

// Export the Zod validation schema for the student
export const studentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
