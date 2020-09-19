import { ActionTypes } from "./stopwatch.types";
const INITIAL_STATE = {
  stopwatchActive: true,
};

export const stopwatchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_OR_HIDE_STOPWATCH:
      return { ...state, stopwatchActive: action.payload };
    default:
      return state;
  }
};

export default stopwatchReducer;
