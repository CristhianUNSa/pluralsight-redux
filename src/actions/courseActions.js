import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';

export const createCourse = course => {
  return { type: types.CREATE_COURSE, course };
};

export const loadCoursesSuccess = courses => {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
};

export const loadCourses = _ => {
  return dispatch => {
    CourseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
};
