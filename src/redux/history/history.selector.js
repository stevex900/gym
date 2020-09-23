import { createSelector } from "reselect";
export const selectHistoryTraining = (state) => state.historyTraining;

export const selectHistoryTrainingItem = createSelector(
  [selectHistoryTraining],
  (viewTraining) => viewTraining.history
);

export const selectHistoryTrainingNumber = createSelector(
  [selectHistoryTraining],
  (viewTraining) => viewTraining.number
);
