import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

//components
import TodaysData from "../../components/todaysData/todaysData";
import CompleteData from "../../components/completeData/completeData";

import "./main.css";

class Main extends Component {
  state = {
    activeTab: 1
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };

  componentDidMount() {
    this.toggle("1");
  }

  render() {
    const todaysData = {
      confirmed: this.props.todaysData ? this.props.todaysData.confirmed : 0,
      date: this.props.todaysData ? this.props.todaysData.date : 0,
      deaths: this.props.todaysData ? this.props.todaysData.deaths : 0,
      recovered: this.props.todaysData ? this.props.todaysData.recovered : 0,
      country: this.props.country ? this.props.country : "the Country"
    };

    const formatedDate = {
      year: this.props.formatedDate ? this.props.formatedDate.year : 2020,
      month: this.props.formatedDate ? this.props.formatedDate.month : "Jan",
      date: this.props.formatedDate ? this.props.formatedDate.date : 1,
      day: this.props.formatedDate ? this.props.formatedDate.day : "Wednesday"
    };

    const completeData = this.props.completeData
      ? this.props.completeData
      : [{ confirmed: 0, date: "2020-1-22", deaths: 0, recovered: 0 }];

    return (
      <main>
        <Nav tabs className="main__navigation-tabs">
          <Container>
            <Row>
              <Col lg="4" sm="6" xs="6" className="offset-lg-2">
                <NavItem className="main__navigation-tab">
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    Latest
                  </NavLink>
                </NavItem>
              </Col>
              <Col lg="4" sm="6" xs="6">
                <NavItem className="main__navigation-tab">
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    Complete
                  </NavLink>
                </NavItem>
              </Col>
            </Row>
          </Container>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            {/* DATA */}
            <TodaysData
              confirmed={todaysData.confirmed}
              date={todaysData.date}
              deaths={todaysData.deaths}
              recovered={todaysData.recovered}
              country={todaysData.country}
              formatedDate={formatedDate}
            />
          </TabPane>
          <TabPane tabId="2">
            {/* DATA */}
            <CompleteData data={completeData} />
          </TabPane>
        </TabContent>
      </main>
    );
  }
}

export default Main;
