import React from "react";

import { Container, Row, Col } from "reactstrap";

import Chart from "./chart";

import "./todaysData.css";

const TodaysData = props => {
  return (
    <React.Fragment>
      <section className="section section-todaysData">
        <Container>
          <div className="todaysData__data">
            <Row>
              <Col lg="12" className="todaysData__data-date mb-4">
                <p>
                  <span className="todaysData__data-date--day">
                    {props.formatedDate.day}
                  </span>
                  <span className="todaysData__data-date--full">
                    {props.formatedDate.date}th {props.formatedDate.month}{" "}
                    {props.formatedDate.year}
                  </span>
                </p>
              </Col>
              <Col lg="4" sm="4" className="mb-4 center">
                <span className="tag">Confirmed</span>
                <span className="value confirmed">{props.confirmed}</span>
              </Col>
              <Col lg="4" sm="4" className="mb-4 center">
                <span className="tag">Recovered</span>
                <span className="value recovered">{props.recovered}</span>
              </Col>
              <Col lg="4" sm="4" className="center">
                <span className="tag">Deaths</span>
                <span className="value death">{props.deaths}</span>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <Row>
            <Col lg="8" className="offset-lg-2 center">
              <p className="chart-title">Current status of {props.country}</p>
            </Col>
            <Col lg="8" className="offset-lg-2">
              <Chart
                active={props.confirmed - (props.recovered + props.deaths)}
                recovered={props.recovered}
                deaths={props.deaths}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default TodaysData;
