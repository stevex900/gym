import { showMenuChangeAction } from "../navigation/navigation.actions";
import { ActionTypes } from "./stopwatch.types";
export const showStopwatchChangeAction = (item) => ({
  type: ActionTypes.SHOW_OR_HIDE_STOPWATCH,
  payload: item,
});
