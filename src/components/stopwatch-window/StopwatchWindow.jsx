import React from "react";
import { connect } from "react-redux";
import {
  selectStopwatchSeries,
  selectStopwatchWorkout,
  selectStopwatchRest,
} from "../../redux/stopwatch/stopwatch.selectors";
import {
  seriesChangeValueAction,
  workoutChangeValueAction,
  restChangeValueAction,
} from "../../redux/stopwatch/stopwatch.actions";
import {
  MainContainer,
  PrimaryContainer,
  SecondaryContainer,
  TertiaryContainer,
  QuaternaryContainer,
  P,
  Button,
  Span,
} from "./stopwatchWindow.styles";
const StopwatchWindow = ({
  series,
  workout,
  rest,
  seriesChangeValueAction,
  restChangeValueAction,
  workoutChangeValueAction,
}) => {
  const handleSerieschange = (bindValue) => {
    if (bindValue === "substract") {
      seriesChangeValueAction(--series);
    } else if (bindValue === "add") {
      seriesChangeValueAction(++series);
    }
  };
  const handleWorkoutOrRestChange = (bindValue) => {
    if (bindValue === "workout-substract") {
      workoutChangeValueAction(--workout);
    } else if (bindValue === "workout-add") {
      workoutChangeValueAction(++workout);
    } else if (bindValue === "rest-substract") {
      restChangeValueAction(--rest);
    } else if (bindValue === "rest-add") {
      restChangeValueAction(++rest);
    }
  };
  return (
    <MainContainer>
      <PrimaryContainer>
        <SecondaryContainer>
          <P>SERIES</P>
          <TertiaryContainer>
            <QuaternaryContainer>
              <Button onClick={handleSerieschange.bind(this, "substract")}>
                -
              </Button>
            </QuaternaryContainer>
            <Span> {series} </Span>
            <QuaternaryContainer>
              <Button onClick={handleSerieschange.bind(this, "add")}>
                {" "}
                +{" "}
              </Button>
            </QuaternaryContainer>
          </TertiaryContainer>
        </SecondaryContainer>
        <SecondaryContainer>
          <P>WORKOUT</P>
          <TertiaryContainer>
            <QuaternaryContainer>
              <Button
                onClick={handleWorkoutOrRestChange.bind(
                  this,
                  "workout-substract"
                )}
              >
                -
              </Button>
            </QuaternaryContainer>
            <Span> {workout} </Span>
            <QuaternaryContainer>
              <Button
                onClick={handleWorkoutOrRestChange.bind(this, "workout-add")}
              >
                +
              </Button>
            </QuaternaryContainer>
          </TertiaryContainer>
        </SecondaryContainer>
        <SecondaryContainer>
          <P>REST</P>
          <TertiaryContainer>
            <QuaternaryContainer>
              <Button
                onClick={handleWorkoutOrRestChange.bind(this, "rest-substract")}
              >
                -
              </Button>
            </QuaternaryContainer>
            <Span> {rest} </Span>
            <QuaternaryContainer>
              <Button
                onClick={handleWorkoutOrRestChange.bind(this, "rest-add")}
              >
                +
              </Button>
            </QuaternaryContainer>
          </TertiaryContainer>
        </SecondaryContainer>
      </PrimaryContainer>
    </MainContainer>
  );
};
const mapStateToProps = (state) => ({
  series: selectStopwatchSeries(state),
  workout: selectStopwatchWorkout(state),
  rest: selectStopwatchRest(state),
});
const mapDispatchToProps = (dispatch) => ({
  seriesChangeValueAction: (item) => dispatch(seriesChangeValueAction(item)),
  restChangeValueAction: (item) => dispatch(restChangeValueAction(item)),
  workoutChangeValueAction: (item) => dispatch(workoutChangeValueAction(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(StopwatchWindow);
