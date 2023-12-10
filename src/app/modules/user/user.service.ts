import config from '../../config';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.schemaModel';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.schemaModel';
import { TUser } from './user.interface';
import { User } from './user.schemaModel';
import { generateStudentId } from './user.utils';

const createUserIntoDB = async (password: string, payload: TStudent) => {
  // if (await User.isUserExists(payload.id)) {
  //   throw new Error('User already exists');
  // }

  const user: Partial<TUser> = {};

  user.password = password || (config.default_pass as string);

  user.role = 'student';

  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  user.id = await generateStudentId(admissionSemester as TAcademicSemester);
  console.log(generateStudentId(admissionSemester as TAcademicSemester));

  const newUser = await User.create(user);

  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;

    const newStudent = await Student.create(payload);
    return newStudent;
  }
};

export const UserServices = {
  createUserIntoDB,
};
