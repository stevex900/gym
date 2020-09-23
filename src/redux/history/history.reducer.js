import { ViewActionTypes } from "../viewTraining/viewTraining.types";
const INITIAL_STATE = {
  number: 8,
  history: [
    {
      id: 1,
      finishedWorkout: [
        {
          id: 1,
          exerciseName: "Przysiad",
          repetitions: "12",
          weight: "100",
        },
        {
          id: 2,
          exerciseName: "Przysiad",
          repetitions: "12",
          weight: "100",
        },
        {
          id: 3,
          exerciseName: "Biceps",
          repetitions: "12",
          weight: "100",
        },
      ],
    },
    {
      id: 2,
      finishedWorkout: [
        {
          id: 1,
          exerciseName: "Klata",
          repetitions: "12",
          weight: "100",
        },
        {
          id: 2,
          exerciseName: "Klata",
          repetitions: "12",
          weight: "100",
        },
        {
          id: 3,
          exerciseName: "Triceps",
          repetitions: "12",
          weight: "100",
        },
      ],
    },
  ],
};

export const historyTrainingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ViewActionTypes.FINISH_TRAINING_ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default historyTrainingReducer;
