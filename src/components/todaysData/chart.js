import React from "react";
import { Doughnut } from "react-chartjs-2";

let state;

const Chart = props => {
  console.log(props.deaths);
  state = {
    labels: ["Active", "Recovered", "Deaths"],
    datasets: [
      {
        label: "All Cases",
        backgroundColor: [
          "rgb(255, 167, 2)",
          "rgb(8, 179, 65)",
          "rgb(245, 24, 31)"
        ],
        hoverBackgroundColor: [
          "rgb(238, 175, 58)",
          "rgb(8, 200, 80)",
          "rgb(245, 77, 55)"
        ],
        data: [props.active, props.recovered, props.deaths]
      }
    ]
  };
  return (
    <React.Fragment>
      <Doughnut
        data={state}
        options={{
          legend: {
            display: window.screen.width <= 600 ? false : true,
            position: "bottom"
          }
        }}
      />
      {window.screen.width <= 600 ? (
        <p className="chart-text">Tap and hold the regions</p>
      ) : null}
    </React.Fragment>
  );
};

export default Chart;
