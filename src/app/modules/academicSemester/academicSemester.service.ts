import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.schemaModel';
import { academicSemesterNameCodeMapper } from './academicSemester.utils';

const createAcademicSemester = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid semester code');
  }
  const academicSemester = await AcademicSemester.create(payload);
  return academicSemester;
};

const getAcademicSemesters = async () => {
  const academicSemesters = await AcademicSemester.find();
  return academicSemesters;
};

const findAcademicSemester = async (id: string) => {
  const academicSemester = await AcademicSemester.findById({ _id: id });
  return academicSemester;
};

const updateAcademicSemester = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code');
  }

  const academicSemester = await AcademicSemester.findOneAndUpdate(
    { _id: id },
    payload,
    { new: true },
  );
  return academicSemester;
};

export const AcademicSemesterServices = {
  createAcademicSemester,
  getAcademicSemesters,
  findAcademicSemester,
  updateAcademicSemester,
};
