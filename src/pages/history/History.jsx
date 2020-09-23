import React from "react";
import { MainContainer } from "./history.styles";
import { connect } from "react-redux";
import {
  selectHistoryTrainingItem,
  selectHistoryTrainingNumber,
} from "../../redux/history/history.selector";
const History = ({ history }) => {
  const historyList = [...history];

  const historyWorkout = historyList.map((item) => (
    <div>
      <div>{item.id}</div>
      <div>
        {item.finishedWorkout.map((sub) => (
          <p>{sub.exerciseName}</p>
        ))}
      </div>
    </div>
  ));

  const handleTest = () => {
    console.log(historyList);
  };
  return (
    <MainContainer>
      <div onClick={handleTest}>sss</div>
      {historyWorkout}
    </MainContainer>
  );
};
const mapStateToProps = (state) => ({
  history: selectHistoryTrainingItem(state),
});
export default connect(mapStateToProps)(History);
