import { createSelector } from "reselect";
export const selectStopwatch = (state) => state.stopwatch;
export const selectStopwatchItem = createSelector(
  [selectStopwatch],
  (stopwatch) => stopwatch.stopwatchActive
);
