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

// Export the Zod validation schema for the student
export const studentValidations = {
  createStudentValidationSchema,
};
