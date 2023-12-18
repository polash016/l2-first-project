import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CourseServices } from './course.service';

const createCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.createCourse(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course created successfully',
    data: result,
  });
});

const getAllCourses = catchAsync(async (req, res) => {
  const result = await CourseServices.getAllCourses(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses retrieved successfully',
    data: result,
  });
});

const findSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.getSingleCourse(id);
  if (result) {
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Course retrieved successfully',
      data: result,
    });
  } else {
    throw new Error();
  }
});

const updateCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.updateCourseIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is updated successfully',
    data: result,
  });
});

const deleteSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.deleteCourse(id);
  if (result) {
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Course Deleted successfully',
      data: result,
    });
  } else {
    throw new Error();
  }
});

const assignFacultiesWithCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const { faculties } = req.body;

  const result = await CourseServices.assignFacultiesWithCourseIntoDB(
    courseId,
    faculties,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculties assigned  successfully',
    data: result,
  });
});

const removeFacultiesFromCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const { faculties } = req.body;

  const result = await CourseServices.removeFacultiesFromCourseFromDB(
    courseId,
    faculties,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculties removed  successfully',
    data: result,
  });
});

export const CourseControllers = {
  createCourse,
  getAllCourses,
  findSingleCourse,
  updateCourse,
  deleteSingleCourse,
  assignFacultiesWithCourse,
  removeFacultiesFromCourse,
};
