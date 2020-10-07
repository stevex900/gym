import React, { useState } from "react";
import { connect } from "react-redux";
import { selectViewTrainingCurrentWorkout } from "../../redux/viewTraining/viewTraining.selector";
import {
  MainContainer,
  PrimaryContainer,
  SecondaryContainer,
  TertiaryContainer,
  QuinaryContainer,
  Button,
  SmallButton,
  ButtonContainer,
  P,
  Input,
} from "./viewTraining.styles";
const ViewTraining = ({ viewCurrentWorkout }) => {
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
  const viewCurrentWorkouts = [...viewCurrentWorkout];
  const viewCurrentWorkoutsList = viewCurrentWorkouts.map((workout) => (
    <TertiaryContainer key={workout.id}>
      {workout.exerciseName}
      {workout.exercise.map((item) => (
        <TertiaryContainer key={item.series}>
          {" "}
          <QuinaryContainer>
            {`${item.repetitions && item.repetitions + "x"}`}
            <Input
              onChange={handleInputChange.bind(this, "repetitions")}
              type="number"
              placeholder="My Score"
            />
            <SmallButton>Confirm</SmallButton>
            <SecondaryContainer>
              <P></P>
            </SecondaryContainer>
          </QuinaryContainer>
          <QuinaryContainer>
            {`${item.weight && item.weight + "kg"}`}
            <Input
              onChange={handleInputChange.bind(this, "series")}
              type="number"
              placeholder="My Score"
            />
            <SmallButton>Confirm</SmallButton>
            <SecondaryContainer>
              <P></P>
            </SecondaryContainer>
          </QuinaryContainer>
        </TertiaryContainer>
      ))}
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
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ViewTraining);
