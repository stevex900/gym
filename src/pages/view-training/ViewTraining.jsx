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
  const handleMyScore = (id, exerciseName, series, repetitions, weight) => {
    let updateWorkout = viewCurrentWorkouts
      .filter((item) => item.id === id)
      .map((item) => item.exercise.filter((item) => item.series !== series));

    console.log("pojedynczy obiekt", updateWorkout);
    let restWorkout = viewCurrentWorkouts.filter((item) => item.id !== id);

    const newWorkout = [...restWorkout, updateWorkout]; //taki pomysl zeby polaczyc tablice z drugiego cwiczenia z tym wyfiltrowanym. W rezultacie zniknie tylko to klikniete

    const myScore = [
      {
        id: id,
        exerciseName: exerciseName,
        exercise: updateWorkout[0],
      },
    ];
    // const myScore = [
    //   {
    //     id: id,
    //     exerciseName: exerciseName,
    //     exercise: [
    //       {
    //         series: series,
    //         repetitions: repetitions,
    //         weight: weight,
    //         myRepetitions: myScoreInputRepetitions,
    //         myWeight: myScoreInputWeight,
    //       },
    //     ],
    //   },
    // ];
    myScoreConfirmAction(myScore);
    console.log(
      ",  id: ",
      id,
      ",  exercise name: ",
      exerciseName,
      ",  series: ",
      series,
      ",  repetitions: ",
      repetitions,
      ",  weight: ",
      weight
    );
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
          </ExerciseDataItemContainer>
        ))}
      </ExerciseData>
    </TertiaryContainer>
  ));
  return (
    <MainContainer>
      <PrimaryContainer>{viewCurrentWorkoutsList}</PrimaryContainer>
      <ButtonContainer>
        <Button>Finished</Button>
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
