import { StudentModel } from '../student.schemaModel';
import { Student } from './student.interface';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudents = async () => {
  const result = await StudentModel.find();
  return result;
};

const findStudent = async (id: string) => {
  const result = await StudentModel.findById(id);
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudents,
  findStudent,
};
