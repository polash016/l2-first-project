import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemesterIntoDB = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemester(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester created successfully',
    data: result,
  });
});

const getAllAcademicSemesters = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAcademicSemesters();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semesters retrieved successfully',
    data: result,
  });
});

const findSingleAcademicSemester = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicSemesterServices.findAcademicSemester(id);
  if (result) {
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester retrieved successfully',
      data: result,
    });
  } else {
    throw new Error();
  }
});
const updateSingleAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicSemesterServices.updateAcademicSemester(
    semesterId,
    req.body,
  );
  if (result) {
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester updated successfully',
      data: result,
    });
  } else {
    throw new Error();
  }
});

export const AcademicSemesterControllers = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesters,
  findSingleAcademicSemester,
  updateSingleAcademicSemester,
};
