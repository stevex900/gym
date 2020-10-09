import React from "react";
import { MainContainer } from "./history.styles";
import { connect } from "react-redux";
import { Button } from "../../components/button/Button.styles";
import {
  WorkoutContainer,
  ExerciseName,
  ExerciseData,
  ExerciseDataItemContainer,
  ExerciseDataItem,
} from "./history.styles";
import {
  selectHistoryTrainingItem,
  selectHistoryTrainingNumber,
} from "../../redux/history/history.selector";
const History = ({ history }) => {
  const historyList = [...history];

  const historyWorkout = historyList.map((workout) => (
    <WorkoutContainer key={workout.id}>
      <ExerciseName> {workout.exerciseName}</ExerciseName>
      <ExerciseData>
        {workout.exercise.map((item) => (
          <ExerciseDataItemContainer key={item.series}>
            <ExerciseDataItem>{`${
              item.repetitions && item.repetitions + "x"
            }`}</ExerciseDataItem>
            <ExerciseDataItem>
              {" "}
              {`${item.weight && item.weight + "kg"}`}
            </ExerciseDataItem>
          </ExerciseDataItemContainer>
        ))}
      </ExerciseData>
      <Button>Remove</Button>
    </WorkoutContainer>
  ));

  return <MainContainer>{historyWorkout}</MainContainer>;
};
const mapStateToProps = (state) => ({
  history: selectHistoryTrainingItem(state),
});
export default connect(mapStateToProps)(History);
