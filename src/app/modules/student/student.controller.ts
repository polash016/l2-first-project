import httpStatus from 'http-status';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const getStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudents(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students retrieved Successfully',
    data: result,
  });
});

const findSingleStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.findStudent(id);
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student retrieved by Id Successfully',
      data: result,
    });
  } else {
    throw Error('Student not found');
  }
});

const updateStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { student } = req.body;
  const result = await StudentServices.updateStudentIntoDB(id, student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is updated successfully',
    data: result,
  });
});

const deleteSingleStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.deleteStudent(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Deleted Successfully',
    data: result,
  });
});

export const StudentController = {
  getStudents,
  findSingleStudent,
  updateStudent,
  deleteSingleStudent,
};
