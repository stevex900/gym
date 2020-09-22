import { ActionTypes } from "../arrangeTraining/arrangeTraining.types";

const INITIAL_STATE = {
  number: 8,
  viewCurrentWorkout:
    //   [
    //     {
    //       id: "",
    //       exerciseName: "",
    //       repetitions: "",
    //       weight: "",
    //       series: "",
    //     },
    //   ],

    [
      {
        id: 1,
        exerciseName: "Przysiad",
        repetitions: "12",
        weight: "100",
        series: 3,
      },
      {
        id: 2,
        exerciseName: "Martwy Ciąg",
        repetitions: "10",
        weight: "120",
        series: 4,
      },
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
