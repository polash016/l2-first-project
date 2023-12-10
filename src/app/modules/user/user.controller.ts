import httpStatus from 'http-status';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
// import { UserValidationSchema } from './user.validation';

const createStudent = catchAsync(async (req, res) => {
  const { password, student } = req.body;

  // const zodValidateData = UserValidationSchema.parse(student);

  const result = await UserServices.createUserIntoDB(password, student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Created Successfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
};
