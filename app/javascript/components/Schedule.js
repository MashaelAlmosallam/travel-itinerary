import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import Moment from "react-moment";

class Schedule extends React.Component {
  constructor(props) {
    super();
    this.state = { schedule: null };
    this.clickHandler = this.clickHandler.bind(this);
  }
  componentDidMount() {
    fetch(`/schedules/${this.props.match.params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ schedule: data });
      });
  }
  clickHandler(visit) {
    console.log("click", visit);
    // Make a fetch request to select a new visit
    fetch(`/visits/${visit.id}/new`, { method: "GET" })
      .then(r => r.json())
      .then(function(data) {
        // this.setState({ schedule: data.visit.place.name });
        const html = `
      <li> ${data.place.name}</li>`;
        html;

        console.log(data);
      });
    // console.log("click", visit);
  }
  render() {
    if (this.state.schedule === null) {
      return <h2>Loading...</h2>;
    }
    const { schedule, visits } = this.state.schedule;
    const grouped = _.groupBy(visits, "day");
    const clickHandler = this.clickHandler;
    const groupedHTML = _.map(grouped, function(visits, day) {
      const visitsHTML = visits.map(function(visit) {
        return (
          <li onClick={e => clickHandler(visit, e.target)}>
            {visit.place.name}
          </li>
        );
      });
      return (
        <div>
          <h2>Day {day}</h2>
          <ul>{visitsHTML}</ul>
        </div>
      );
    });
    // console.log(grouped);
    // for (let day in grouped) {
    //   // console.log(day);
    // }

    // {
    // _.groupBy(visits, "day");
    //_.groupBy(visit.place.name, "day");
    // // }
    // const visitsHTML = visits.map(function(visit) {
    //   // console.log(visit);
    //   return (
    //     <p>
    //       {/* {_.groupBy(visits, "day")} */}
    //   );
    // });
    return (
      <div>
        <h2>
          {schedule.city}: {/* schedule.start_day.Date("YYYY/MM/DD") */}
          <Moment format="MM/DD/YYYY">{schedule.end_day}</Moment>
        </h2>
        {groupedHTML}
      </div>
    );
  }
}
export default Schedule;
