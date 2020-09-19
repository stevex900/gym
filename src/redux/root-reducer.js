import { combineReducers } from "redux";
import { menuReducer } from "../redux/navigation/navigation.reducer";
import { stopwatchReducer } from "../redux/stopwatch/stopwatch.reducer";

export default combineReducers({
  menu: menuReducer,
  stopwatch: stopwatchReducer,
});
