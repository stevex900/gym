import { ActionTypes } from "../arrangeTraining/arrangeTraining.types";
import { ViewActionTypes } from "./viewTraining.types";
const INITIAL_STATE = {
  number: 8,
  viewCurrentWorkout: [
    // {
    //   id: 1,
    //   exerciseName: "Przysiad",
    //   repetitions: "12",
    //   weight: "100",
    // },
    // {
    //   id: 2,
    //   exerciseName: "Przysiad",
    //   repetitions: "10",
    //   weight: "110",
    // },
    // {
    //   id: 3,
    //   exerciseName: "Przysiad",
    //   repetitions: "8",
    //   weight: "140",
    // },
  ],
};

export const viewTrainingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_TRAINING_ACTION:
      return {
        ...state,
        viewCurrentWorkout: action.payload,
      };

    default:
      return state;
  }
};

export default viewTrainingReducer;
