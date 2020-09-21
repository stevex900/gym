import React, { useState } from "react";
import { connect } from "react-redux";
import {
  setExerciseAction,
  numberChange,
} from "../../redux/arrangeTraining/arrangeTraining.actions";
import {
  selectArrangeTrainingCurrentWorkout,
  selectArrangeTrainingNumber,
} from "../../redux/arrangeTraining/arrangeTraining.selector";
import {
  MainContainer,
  PrimaryContainer,
  SecondaryContainer,
  TertiaryContainer,
  QuinaryContainer,
  Form,
  Input,
  Textarea,
  Button,
  ButtonContainer,
} from "./arrangeTraining.styles";
const ArrangeTraining = ({
  currentWorkout,
  number,
  setExerciseAction,
  numberChange,
}) => {
  const [inputExerciseName, setInputExerciseName] = useState("");
  const [inputRepetitions, setInputRepetitions] = useState("");
  const [inputWeight, setInputWeight] = useState("");
  const handleInputChange = (bindValue, e) => {
    if (bindValue === "exercise-name") {
      setInputExerciseName(e.target.value);
    } else if (bindValue === "repetitions") {
      setInputRepetitions(e.target.value);
    } else if (bindValue === "weight") {
      setInputWeight(e.target.value);
    }
  };
  const handleSetExercise = (e) => {
    e.preventDefault();
    const newExercise = {
      id: number + 1,
      exerciseName: inputExerciseName,
      repetitions: inputRepetitions,
      weight: inputWeight,
    };
    setExerciseAction(newExercise);
    numberChange(number + 1);
  };
  const currentWorkouts = [...currentWorkout];
  const currentWorkoutsList = currentWorkouts.map((workout) => (
    <TertiaryContainer key={workout.id}>
      <QuinaryContainer>{workout.exerciseName}</QuinaryContainer>
      <QuinaryContainer>{workout.repetitions}x</QuinaryContainer>
      <QuinaryContainer>{workout.weight}kg</QuinaryContainer>
    </TertiaryContainer>
  ));
  return (
    <MainContainer>
      <SecondaryContainer>{currentWorkoutsList}</SecondaryContainer>
      <PrimaryContainer>
        <Input
          onChange={handleInputChange.bind(this, "exercise-name")}
          type="menu"
          placeholder={"exercise name"}
        ></Input>
        <Input
          onChange={handleInputChange.bind(this, "repetitions")}
          type="number"
          placeholder={"repetitions"}
        />
        <Input
          onChange={handleInputChange.bind(this, "weight")}
          type="number"
          placeholder={"weight"}
        />
      </PrimaryContainer>
      <ButtonContainer>
        <Button onClick={handleSetExercise}>Set Exercise</Button>
        <Button>Set Training</Button>
      </ButtonContainer>
    </MainContainer>
  );
};
const mapStateToProps = (state) => ({
  currentWorkout: selectArrangeTrainingCurrentWorkout(state),
  number: selectArrangeTrainingNumber(state),
});
const mapDispatchToProps = (dispatch) => ({
  setExerciseAction: (item) => dispatch(setExerciseAction(item)),
  numberChange: (item) => dispatch(numberChange(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ArrangeTraining);
