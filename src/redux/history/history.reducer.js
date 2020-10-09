import { ViewActionTypes } from "../viewTraining/viewTraining.types";
const INITIAL_STATE = {
  number: 8,
  history: [
    {
      id: 1,
      exerciseName: "Klata",
      exercise: [
        {
          series: 1,
          repetitions: 2,
          weight: 9,
          myRepetitions: null,
          myWeight: null,
        },
        {
          series: 2,
          repetitions: 5,
          weight: 3,
          myRepetitions: null,
          myWeight: null,
        },
      ],
    },
    {
      id: 2,
      exerciseName: "Plecy",
      exercise: [
        {
          series: 1,
          repetitions: 12,
          weight: 112,
          myRepetitions: null,
          myWeight: null,
        },
        {
          series: 2,
          repetitions: 14,
          weight: 120,
          myRepetitions: null,
          myWeight: null,
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
