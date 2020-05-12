import React, { Component } from "react";
import axios from "axios";
import toastr from "toastr";
import "./App.css";

//containers
import Nav from "./components/nav/nav";
import Header from "./container/header/header";
import Main from "./container/main/main";
//components
import Footer from "./components/footer/footer";

class App extends Component {
  state = {
    country: "",
    completeData: null,
    todaysData: null,
    formatedDate: {
      year: "2020",
      month: "Jan",
      date: "1",
      day: "Wednesday",
      monthNum: 1
    }
  };
  getData = async searchedCountry => {
    try {
      //const country = prompt("Enter country");
      let response = await axios.get(
        "https://pomber.github.io/covid19/timeseries.json"
      );
      let countryData = response.data[searchedCountry];
      // ALL DATA
      this.setState({ completeData: countryData });
      //set todays date
      this.setState({ todaysData: countryData.slice(-1)[0] });
      //set formatted date
      this.formatDate(countryData.slice(-1)[0].date);
      toastr.options = {
        positionClass: "toast-top-right",
        hideDuration: 300,
        timeOut: 2000
      };
      toastr.clear();
      setTimeout(() => toastr.success("Data loaded successfully"), 300);
    } catch (error) {
      this.setState({
        todaysData: { date: "2020-0-0", confirmed: 0, recovered: 0, deaths: 0 }
      });
      toastr.options = {
        positionClass: "toast-top-right",
        hideDuration: 300,
        timeOut: 2000
      };
      toastr.clear();
      setTimeout(() => toastr.error("Unable to fetch the data"), 300);
    }
  };

  handleUserQuery = (e, userQuery) => {
    e.preventDefault();

    //pre-process user query
    let countrySearched = [];
    if (
      userQuery === "america" ||
      userQuery === "America" ||
      userQuery === "USA"
    ) {
      toastr.options = {
        debug: "false",
        positionClass: "toast-top-right",
        hideDuration: 300,
        timeOut: 4000
      };
      toastr.clear();
      setTimeout(
        () =>
          toastr.warning("Try searching 'US' instead of 'america' or 'USA'"),
        2300
      );
    } else if (userQuery.length === 2)
      countrySearched = userQuery.toUpperCase();
    else {
      userQuery = userQuery.split(" ");
      userQuery.forEach(word => {
        word = word[0].toUpperCase() + word.slice(1);
        countrySearched.push(word);
      });
      countrySearched = countrySearched.join(" ");
    }

    this.setState({ country: countrySearched });
    this.getData(countrySearched);
  };

  formatDate = date => {
    const d = new Date(date);
    const d_year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const d_month = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const d_date = new Intl.DateTimeFormat("en", { day: "numeric" }).format(d);
    const d_day = new Intl.DateTimeFormat("en", { weekday: "long" }).format(d);
    const d_monthNum = new Intl.DateTimeFormat("en", {
      month: "numeric"
    }).format(d);
    this.setState({
      formatedDate: {
        year: d_year,
        month: d_month,
        date: d_date,
        day: d_day,
        monthNum: d_monthNum
      }
    });
  };

  componentDidMount() {
    this.setState({ country: "India" });
    //make default call
    this.getData("India");
  }

  render() {
    return (
      <React.Fragment>
        {/* NAV */}
        <Nav />
        {/* HEADER */}
        <Header search={this.handleUserQuery} />
        {/* MAIN */}
        <Main
          todaysData={this.state.todaysData}
          completeData={this.state.completeData}
          country={this.state.country}
          formatedDate={this.state.formatedDate}
        />
        {/* FOOTER */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
