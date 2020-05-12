import React from "react";
import { Progress } from "reactstrap";

const Status = props => {
  const maxValue =
    props.stats.healing +
    props.stats.fighting +
    props.stats.bad +
    props.stats.critical;

  console.log(
    maxValue,
    props.stats.healing,
    props.stats.fighting,
    props.stats.bad,
    props.stats.critical
  );

  return (
    <div className="status-bar">
      <Progress multi className="" max={maxValue}>
        <Progress
          bar
          color="success"
          value={(props.stats.healing / maxValue) * 100}
          aria-valuemax="100"
        />
        <Progress
          bar
          color="primary"
          value={(props.stats.fighting / maxValue) * 100}
          aria-valuemax="100"
        />
        <Progress
          bar
          color="warning"
          value={(props.stats.bad / maxValue) * 100}
          aria-valuemax="100"
        />
        <Progress
          bar
          color="danger"
          value={(props.stats.critical / maxValue) * 100}
          aria-valuemax="100"
        />
      </Progress>
    </div>
  );
};

export default Status;
