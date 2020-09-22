import React, { useState } from "react";
import { connect } from "react-redux";
import {
  setExerciseAction,
  setTrainingAction,
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
  setTrainingAction,
  numberChange,
}) => {
  const [inputExerciseName, setInputExerciseName] = useState("");
  const [inputRepetitions, setInputRepetitions] = useState("");
  const [inputWeight, setInputWeight] = useState("");
  const [inputSeries, setInputSeries] = useState("");
  const handleInputChange = (bindValue, e) => {
    if (bindValue === "exercise-name") {
      setInputExerciseName(e.target.value);
    } else if (bindValue === "repetitions") {
      setInputRepetitions(e.target.value);
    } else if (bindValue === "weight") {
      setInputWeight(e.target.value);
    } else if (bindValue === "series") {
      setInputSeries(e.target.value);
    }
  };
  const handleSetExercise = (e) => {
    e.preventDefault();
    const newExercise = {
      id: number + 1,
      exerciseName: inputExerciseName,
      repetitions: inputRepetitions,
      weight: inputWeight,
      series: inputSeries,
    };
    setExerciseAction(newExercise);
    numberChange(number + 1);
    setInputExerciseName("");
    setInputRepetitions("");
    setInputWeight("");
    setInputSeries("");
  };
  const currentWorkouts = [...currentWorkout];
  const currentWorkoutsList = currentWorkouts.map((workout) => (
    <TertiaryContainer key={workout.id}>
      <QuinaryContainer>{workout.exerciseName}</QuinaryContainer>
      <QuinaryContainer>
        {`${workout.repetitions && workout.repetitions + "x"}`}
      </QuinaryContainer>
      <QuinaryContainer>{`${
        workout.series && workout.series + "x"
      }`}</QuinaryContainer>
      <QuinaryContainer>{`${
        workout.weight && workout.weight + "kg"
      }`}</QuinaryContainer>
    </TertiaryContainer>
  ));
  const handleSetTraining = () => {
    setTrainingAction(currentWorkouts);
    // console.log(currentWorkouts);
  };
  return (
    <MainContainer>
      <SecondaryContainer>{currentWorkoutsList}</SecondaryContainer>
      <PrimaryContainer>
        <Input
          onChange={handleInputChange.bind(this, "exercise-name")}
          type="menu"
          placeholder={"exercise name"}
          value={inputExerciseName}
        ></Input>
        <Input
          onChange={handleInputChange.bind(this, "repetitions")}
          type="number"
          placeholder={"repetitions"}
          value={inputRepetitions}
        />
        <Input
          onChange={handleInputChange.bind(this, "series")}
          type="number"
          placeholder={"series"}
          value={inputSeries}
        />
        <Input
          onChange={handleInputChange.bind(this, "weight")}
          type="number"
          placeholder={"weight"}
          value={inputWeight}
        />
        <ButtonContainer>
          <Button onClick={handleSetExercise}>Set Exercise</Button>
          <Button onClick={handleSetTraining}>Set Training</Button>
        </ButtonContainer>
      </PrimaryContainer>
    </MainContainer>
  );
};
const mapStateToProps = (state) => ({
  currentWorkout: selectArrangeTrainingCurrentWorkout(state),
  number: selectArrangeTrainingNumber(state),
});
const mapDispatchToProps = (dispatch) => ({
  setExerciseAction: (item) => dispatch(setExerciseAction(item)),
  setTrainingAction: (item) => dispatch(setTrainingAction(item)),
  numberChange: (item) => dispatch(numberChange(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ArrangeTraining);
