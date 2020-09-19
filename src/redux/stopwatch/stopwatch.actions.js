import { ActionTypes } from "./stopwatch.types";
export const showStopwatchChangeAction = (item) => ({
  type: ActionTypes.SHOW_OR_HIDE_STOPWATCH,
  payload: item,
});
export const seriesChangeValueAction = (item) => ({
  type: ActionTypes.SERIES_CHANGE,
  payload: item,
});
export const workoutChangeValueAction = (item) => ({
  type: ActionTypes.WORKOUT_CHANGE,
  payload: item,
});
export const restChangeValueAction = (item) => ({
  type: ActionTypes.REST_CHANGE,
  payload: item,
});
