import { Student } from './student.schemaModel';

const getAllStudents = async () => {
  const result = await Student.find();
  return result;
};

const findStudent = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};
const deleteStudent = async (id: string) => {
  const result = await Student.updateOne(
    { id },
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const StudentServices = {
  getAllStudents,
  findStudent,
  deleteStudent,
};
