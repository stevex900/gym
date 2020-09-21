import { combineReducers } from "redux";
import { menuReducer } from "../redux/navigation/navigation.reducer";
import { stopwatchReducer } from "../redux/stopwatch/stopwatch.reducer";
import { arrangeTrainingReducer } from "./arrangeTraining/arrangeTraining.reducer";

export default combineReducers({
  menu: menuReducer,
  stopwatch: stopwatchReducer,
  arrangeTraining: arrangeTrainingReducer,
});
