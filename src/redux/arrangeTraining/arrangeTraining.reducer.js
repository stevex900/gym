import { ActionTypes } from "./arrangeTraining.types";
const INITIAL_STATE = {
  number: 8,
  currentWorkout: [
    {
      id: 1,
      exerciseName: "Przysiad",
      repetitions: "12",
      weight: "100",
    },
    {
      id: 2,
      exerciseName: "Martwy Ciąg",
      repetitions: "10",
      weight: "120",
    },
  ],
};

export const arrangeTrainingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_EXERCISE_ACTION:
      return {
        ...state,
        currentWorkout: [...state.currentWorkout, action.payload],
      };
    case ActionTypes.SET_TRAINING_ACTION:
      return { ...state };
    case ActionTypes.NUMBER_CHANGE:
      return {
        ...state,
        number: action.payload,
      };
    default:
      return state;
  }
};
//number: action.payload,
export default arrangeTrainingReducer;
