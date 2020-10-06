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
  InputContainer,
  P,
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
  const [inputSeries, setInputSeries] = useState("");
  const [inputRepetitions1, setInputRepetitions1] = useState("");
  const [inputWeight1, setInputWeight1] = useState("");
  const [inputRepetitions2, setInputRepetitions2] = useState("");
  const [inputWeight2, setInputWeight2] = useState("");
  const [inputRepetitions3, setInputRepetitions3] = useState("");
  const [inputWeight3, setInputWeight3] = useState("");
  const [inputRepetitions4, setInputRepetitions4] = useState("");
  const [inputWeight4, setInputWeight4] = useState("");

  const handleInputChange = (bindValue, e) => {
    if (bindValue === "exercise-name") {
      setInputExerciseName(e.target.value);
    } else if (bindValue === "series") {
      setInputSeries(e.target.value);
    } else if (bindValue === "repetitions1") {
      setInputRepetitions1(e.target.value);
    } else if (bindValue === "weight1") {
      setInputWeight1(e.target.value);
    } else if (bindValue === "repetitions2") {
      setInputRepetitions2(e.target.value);
    } else if (bindValue === "weight2") {
      setInputWeight2(e.target.value);
    } else if (bindValue === "repetitions3") {
      setInputRepetitions3(e.target.value);
    } else if (bindValue === "weight3") {
      setInputWeight3(e.target.value);
    } else if (bindValue === "repetitions4") {
      setInputRepetitions4(e.target.value);
    } else if (bindValue === "weight4") {
      setInputWeight4(e.target.value);
    }
  };
  const handleSetExercise = (e) => {
    e.preventDefault();
    const firstSeries = {
      id: number + 1,
      exerciseName: inputExerciseName,
      repetitions: inputRepetitions1,
      weight: inputWeight1,
    };
    const secondSeries = {
      id: number + 2,
      exerciseName: inputExerciseName,
      repetitions: inputRepetitions2,
      weight: inputWeight2,
    };
    const thirdSeries = {
      id: number + 3,
      exerciseName: inputExerciseName,
      repetitions: inputRepetitions3,
      weight: inputWeight3,
    };
    const fourthSeries = {
      id: number + 4,
      exerciseName: inputExerciseName,
      repetitions: inputRepetitions4,
      weight: inputWeight4,
    };
    if (firstSeries.repetitions || firstSeries.weight) {
      setExerciseAction(firstSeries);
    }
    if (secondSeries.repetitions || secondSeries.weight) {
      setExerciseAction(secondSeries);
    }
    if (thirdSeries.repetitions || thirdSeries.weight) {
      setExerciseAction(thirdSeries);
    }
    if (fourthSeries.repetitions || fourthSeries.weight) {
      setExerciseAction(fourthSeries);
    }
    numberChange(number + 4);
    setInputExerciseName("");
    setInputSeries("");
    setInputRepetitions1("");
    setInputWeight1("");
    setInputRepetitions2("");
    setInputWeight2("");
    setInputRepetitions3("");
    setInputWeight3("");
    setInputRepetitions4("");
    setInputWeight4("");
  };
  const currentWorkouts = [...currentWorkout];
  const currentWorkoutsList = currentWorkouts.map((workout) => (
    <TertiaryContainer key={workout.id}>
      <QuinaryContainer>{workout.exerciseName}</QuinaryContainer>
      <QuinaryContainer>
        {`${workout.repetitions && workout.repetitions + "x"}`}
      </QuinaryContainer>
      {/* <QuinaryContainer>{`${
        workout.series && workout.series + "x"
      }`}</QuinaryContainer> */}
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
        ></Input>{" "}
        <Input
          onChange={handleInputChange.bind(this, "series")}
          type="number"
          placeholder={"series"}
          value={inputSeries}
        />
        {/* ================================================== */}
        {inputSeries === "4" ||
        inputSeries === "3" ||
        inputSeries === "2" ||
        inputSeries === "1" ? (
          <InputContainer>
            <P>1st</P>
            <Input
              onChange={handleInputChange.bind(this, "repetitions1")}
              type="number"
              placeholder={"repetitions"}
              value={inputRepetitions1}
            />
            <Input
              onChange={handleInputChange.bind(this, "weight1")}
              type="number"
              placeholder={"weight"}
              value={inputWeight1}
            />
          </InputContainer>
        ) : null}
        {/* ================================================== */}
        {inputSeries === "4" || inputSeries === "3" || inputSeries === "2" ? (
          <InputContainer>
            <P>2nd</P>
            <Input
              onChange={handleInputChange.bind(this, "repetitions2")}
              type="number"
              placeholder={"repetitions"}
              value={inputRepetitions2}
            />
            <Input
              onChange={handleInputChange.bind(this, "weight2")}
              type="number"
              placeholder={"weight"}
              value={inputWeight2}
            />
          </InputContainer>
        ) : null}
        {/* ================================================== */}
        {inputSeries === "4" || inputSeries === "3" ? (
          <InputContainer>
            <P>3rd</P>
            <Input
              onChange={handleInputChange.bind(this, "repetitions3")}
              type="number"
              placeholder={"repetitions"}
              value={inputRepetitions3}
            />
            <Input
              onChange={handleInputChange.bind(this, "weight3")}
              type="number"
              placeholder={"weight"}
              value={inputWeight3}
            />
          </InputContainer>
        ) : null}
        {/* ================================================== */}
        {inputSeries === "4" ? (
          <InputContainer>
            <P>4th</P>
            <Input
              onChange={handleInputChange.bind(this, "repetitions4")}
              type="number"
              placeholder={"repetitions"}
              value={inputRepetitions4}
            />
            <Input
              onChange={handleInputChange.bind(this, "weight4")}
              type="number"
              placeholder={"weight"}
              value={inputWeight4}
            />
          </InputContainer>
        ) : null}
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
