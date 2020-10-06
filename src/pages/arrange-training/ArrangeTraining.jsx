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
  ExerciseName,
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
    const oneSeries = {
      id: number + 1,
      exerciseName: inputExerciseName,
      exercise: [
        {
          series: 1,
          repetitions: inputRepetitions1,
          weight: inputWeight1,
        },
      ],
    };
    const twoSeries = {
      id: number + 1,
      exerciseName: inputExerciseName,
      exercise: [
        {
          series: 1,
          repetitions: inputRepetitions1,
          weight: inputWeight1,
        },
        {
          series: 2,
          repetitions: inputRepetitions2,
          weight: inputWeight2,
        },
      ],
    };
    const threeSeries = {
      id: number + 1,
      exerciseName: inputExerciseName,
      exercise: [
        {
          series: 1,
          repetitions: inputRepetitions1,
          weight: inputWeight1,
        },
        {
          series: 2,
          repetitions: inputRepetitions2,
          weight: inputWeight2,
        },
        {
          series: 3,
          repetitions: inputRepetitions3,
          weight: inputWeight3,
        },
      ],
    };
    const fourSeries = {
      id: number + 1,
      exerciseName: inputExerciseName,
      exercise: [
        {
          series: 1,
          repetitions: inputRepetitions1,
          weight: inputWeight1,
        },
        {
          series: 2,
          repetitions: inputRepetitions2,
          weight: inputWeight2,
        },
        {
          series: 3,
          repetitions: inputRepetitions3,
          weight: inputWeight3,
        },
        {
          series: 4,
          repetitions: inputRepetitions4,
          weight: inputWeight4,
        },
      ],
    };
    numberChange(number + 1);
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
    if (fourSeries.exercise[3].repetitions || fourSeries.exercise[3].weight) {
      return setExerciseAction(fourSeries);
    }
    if (threeSeries.exercise[2].repetitions || threeSeries.exercise[2].weight) {
      return setExerciseAction(threeSeries);
    }
    if (twoSeries.exercise[1].repetitions || twoSeries.exercise[1].weight) {
      return setExerciseAction(twoSeries);
    }
    if (oneSeries.exercise[0].repetitions || oneSeries.exercise[0].weight) {
      setExerciseAction(oneSeries);
    }

    // setExerciseAction(fourSeries);
  };
  const currentWorkouts = [...currentWorkout];
  const currentWorkoutsList = currentWorkouts.map((workout) => (
    <TertiaryContainer key={workout.id}>
      {workout.exerciseName}
      {workout.exercise.map((item) => (
        <QuinaryContainer key={item.series}>
          {`${item.repetitions && item.repetitions + "x"}`}
          {`${item.weight && item.weight + "kg"}`}
        </QuinaryContainer>
      ))}
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
