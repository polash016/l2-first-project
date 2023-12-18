import {
  TCourse,
  TCourseFaculty,
  TPrerequisiteCourses,
} from './course.interface';
import { Schema, model } from 'mongoose';

const preRequisiteCoursesSchema = new Schema<TPrerequisiteCourses>(
  {
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    _id: false,
  },
);

const courseSchemaModel = new Schema<TCourse>(
  {
    title: {
      type: String,
      unique: true,
      trim: true,
      required: [true, 'Title Is Required'],
    },
    prefix: {
      type: String,
      trim: true,
      required: [true, 'Prefix Is Required'],
    },
    code: {
      type: Number,
      trim: true,
      required: [true, 'Code Is Required'],
    },
    credits: {
      type: Number,
      trim: true,
      required: [true, 'Credits Is Required'],
    },
    preRequisiteCourses: [preRequisiteCoursesSchema],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Course = model<TCourse>('Course', courseSchemaModel);

const courseFacultySchema = new Schema<TCourseFaculty>({
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    unique: true,
  },
  faculties: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Faculty',
    },
  ],
});

export const CourseFaculty = model<TCourseFaculty>(
  'CourseFaculty',
  courseFacultySchema,
);
