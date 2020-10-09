import React, { useState } from "react";
import { connect } from "react-redux";
import { myScoreConfirmAction } from "../../redux/viewTraining/viewTraining.actions";
import { selectViewTrainingCurrentWorkout } from "../../redux/viewTraining/viewTraining.selector";
import {
  MainContainer,
  PrimaryContainer,
  SecondaryContainer,
  TertiaryContainer,
  QuinaryContainer,
  ExerciseDataMyRep,
  ExerciseDataMyWeight,
  Button,
  SmallButton,
  ButtonContainer,
  ExerciseName,
  P,
  Input,
  ExerciseData,
  ExerciseDataItemContainer,
  ExerciseDataItem,
} from "./viewTraining.styles";
const ViewTraining = ({ viewCurrentWorkout, number, myScoreConfirmAction }) => {
  const [myScoreInputRepetitions, setMyScoreInputRepetitions] = useState("");
  const [myScoreInputWeight, setMyScoreInputWeight] = useState("");
  const [myScoreInputSeries, setMyScoreInputSeries] = useState("");
  const handleInputChange = (bindValue, e) => {
    if (bindValue === "repetitions") {
      setMyScoreInputRepetitions(e.target.value);
    } else if (bindValue === "weight") {
      setMyScoreInputWeight(e.target.value);
    } else if (bindValue === "series") {
      setMyScoreInputSeries(e.target.value);
    }
  };

  const color = (rep, weight, myRep, myWeight) => {
    if (rep > myRep || weight > myWeight) {
      return "red";
    } else {
      return "green";
    }
  };

  let viewCurrentWorkouts = [...viewCurrentWorkout];
  const handleFinished = () => {
    console.log("dziala");
  };
  const handleMyScore = (id, exerciseName, series) => {
    let remainedSeries = viewCurrentWorkouts
      .filter((item) => item.id === id)
      .map((item) => item.exercise.filter((item) => item.series !== series));

    let deletedSeries = viewCurrentWorkouts
      .filter((item) => item.id === id)
      .map((item) => item.exercise.filter((item) => item.series === series));

    let updatedDeletedSeries = {
      series: deletedSeries[0][0].series,
      repetitions: deletedSeries[0][0].repetitions,
      weight: deletedSeries[0][0].weight,
      myRepetitions: myScoreInputRepetitions,
      myWeight: myScoreInputWeight,
    };

    let remainedExercise = viewCurrentWorkouts.filter((item) => item.id !== id);
    let combineSeries = [...remainedSeries[0], updatedDeletedSeries];

    const myDoneScore = [
      {
        id: id,
        exerciseName: exerciseName,
        exercise: combineSeries,
      },
    ];
    const newWorkout = [...myDoneScore, ...remainedExercise];

    myScoreConfirmAction(newWorkout);
  };
  const viewCurrentWorkoutsList = viewCurrentWorkouts.map((workout) => (
    <TertiaryContainer key={workout.id}>
      <ExerciseName> {workout.exerciseName}</ExerciseName>
      <ExerciseData>
        {" "}
        {workout.exercise.map((item) => (
          <ExerciseDataItemContainer key={item.series}>
            <ExerciseDataItem>
              {`${item.repetitions && item.repetitions + "x"}`}
            </ExerciseDataItem>
            <ExerciseDataItem>
              {`${item.weight && item.weight + "kg"}`}{" "}
              <Input
                onChange={handleInputChange.bind(this, "repetitions")}
                type="number"
                placeholder="My x"
              />
              <Input
                onChange={handleInputChange.bind(this, "weight")}
                type="number"
                placeholder="My kg"
              />
            </ExerciseDataItem>
            <SmallButton
              onClick={() =>
                handleMyScore(
                  workout.id,
                  workout.exerciseName,
                  item.series,
                  item.repetitions,
                  item.weight
                )
              }
            >
              Confirm
            </SmallButton>
            {item.myRepetitions || item.myWeight ? (
              <ExerciseDataItemContainer>
                <ExerciseDataMyRep
                  color={color(
                    item.repetitions,
                    item.weight,
                    item.myRepetitions,
                    item.myWeight
                  )}
                >
                  {`${item.myRepetitions && item.myRepetitions + "x"}`}
                </ExerciseDataMyRep>
                <ExerciseDataMyWeight
                  color={color(
                    item.repetitions,
                    item.weight,
                    item.myRepetitions,
                    item.myWeight
                  )}
                >
                  {`${item.myWeight && item.myWeight + "kg"}`}
                </ExerciseDataMyWeight>
              </ExerciseDataItemContainer>
            ) : null}
          </ExerciseDataItemContainer>
        ))}
      </ExerciseData>
    </TertiaryContainer>
  ));
  return (
    <MainContainer>
      <PrimaryContainer>{viewCurrentWorkoutsList}</PrimaryContainer>
      <ButtonContainer>
        <Button onClick={handleFinished}>Finished</Button>
      </ButtonContainer>
    </MainContainer>
  );
};
const mapStateToProps = (state) => ({
  viewCurrentWorkout: selectViewTrainingCurrentWorkout(state),
});
const mapDispatchToProps = (dispatch) => ({
  myScoreConfirmAction: (item) => dispatch(myScoreConfirmAction(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewTraining);
