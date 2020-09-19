import React from "react";
import { connect } from "react-redux";
import { selectStopwatchItem } from "../../redux/stopwatch/stopwatch.selectors";
import { ReactComponent as StopwatchIcon } from "../../assets/stopwatch.svg";
import { Container } from "./stopwatch.styles";
import { showStopwatchChangeAction } from "../../redux/stopwatch/stopwatch.actions";
import StopwatchWindow from "../stopwatch-window/StopwatchWindow";
const Stopwatch = ({ stopwatchActive, showStopwatchChangeAction }) => {
  const handleShowStopwatch = () => {
    showStopwatchChangeAction(!stopwatchActive);
  };
  return (
    <Container>
      <StopwatchIcon onClick={handleShowStopwatch} />
      {stopwatchActive && <StopwatchWindow />}
    </Container>
  );
};
const mapStateToProps = (state) => ({
  stopwatchActive: selectStopwatchItem(state),
});
const mapDispatchToProps = (dispatch) => ({
  showStopwatchChangeAction: (item) =>
    dispatch(showStopwatchChangeAction(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);
