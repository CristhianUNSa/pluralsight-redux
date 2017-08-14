import * as types from '../actions/actionTypes';

const initialState = [];

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, Object.assign({}, action.course)];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
