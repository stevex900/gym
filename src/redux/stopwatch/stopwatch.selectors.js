import { createSelector } from "reselect";
export const selectStopwatch = (state) => state.stopwatch;
export const selectStopwatchItem = createSelector(
  [selectStopwatch],
  (stopwatch) => stopwatch.stopwatchActive
);
export const selectStopwatchSeries = createSelector(
  [selectStopwatch],
  (stopwatch) => stopwatch.series
);
export const selectStopwatchWorkout = createSelector(
  [selectStopwatch],
  (stopwatch) => stopwatch.workout
);
export const selectStopwatchRest = createSelector(
  [selectStopwatch],
  (stopwatch) => stopwatch.rest
);
