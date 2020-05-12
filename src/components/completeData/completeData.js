import React from "react";
import { Container, Row, Col, Table } from "reactstrap";

import Status from "./status";

import "./completeData.css";

const CompleteData = props => {
  let status = "";
  let stats = {
    healing: 0,
    fighting: 0,
    bad: 0,
    critical: 0
  };
  return (
    <section className="section section-completeData">
      <Container>
        <Row>
          <Col lg="12">
            <Status stats={stats} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg="12">
            <Table
              hover
              className="table-striped completeData__table table-dark table-borderless center"
            >
              <thead>
                <tr className="completeData__table--headings">
                  <th className="completeData__table--heading">Date</th>
                  <th className="completeData__table--heading confirmed">
                    Confirmed
                  </th>
                  <th className="completeData__table--heading recovered">
                    Recovered
                  </th>
                  <th className="completeData__table--heading death">Deaths</th>
                </tr>
              </thead>
              <tbody>
                {props.data.map(entry => {
                  if (
                    entry.confirmed === 0 ||
                    (entry.confirmed / 4 < entry.recovered &&
                      entry.recovered / 2 >= entry.deaths)
                  ) {
                    status = "healing";
                    stats.healing += 1;
                  } else if (
                    entry.confirmed / 4 >= entry.recovered &&
                    entry.recovered / 2 >= entry.deaths
                  ) {
                    status = "bad";
                    stats.bad += 1;
                  } else if (
                    entry.confirmed / 4 >= entry.recovered &&
                    entry.recovered / 2 < entry.deaths
                  ) {
                    status = "critical";
                    stats.critical += 1;
                  } else {
                    status = "fighting";
                    stats.fighting += 1;
                  }
                  return (
                    <tr key={entry.date}>
                      <th
                        scope="row"
                        className={status}
                        style={{ fontSize: "1.2rem" }}
                      >
                        {entry.date}
                      </th>
                      <td className="completeData__table--data">
                        {entry.confirmed}
                      </td>
                      <td className="completeData__table--data">
                        {entry.recovered}
                      </td>
                      <td className="completeData__table--data">
                        {entry.deaths}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CompleteData;
