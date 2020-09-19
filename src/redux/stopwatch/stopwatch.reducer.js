import { ActionTypes } from "./stopwatch.types";
const INITIAL_STATE = {
  stopwatchActive: true,
  series: 0,
  workout: 0,
  rest: 0,
};

export const stopwatchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_OR_HIDE_STOPWATCH:
      return { ...state, stopwatchActive: action.payload };
    case ActionTypes.SERIES_CHANGE:
      return { ...state, series: action.payload };
    case ActionTypes.WORKOUT_CHANGE:
      return { ...state, workout: action.payload };
    case ActionTypes.REST_CHANGE:
      return { ...state, rest: action.payload };
    default:
      return state;
  }
};

export default stopwatchReducer;
