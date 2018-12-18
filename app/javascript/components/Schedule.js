import React from "react";
import { Link } from "react-router-dom";
class Schedule extends React.Component {
  constructor(props) {
    super();
    this.state = { schedule: null };
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
  render() {
    if (this.state.schedule === null) {
      return <h2>Loading...</h2>;
    }
    const { schedule, visits } = this.state.schedule;
    const visitsHTML = visits.map(function(visit) {
      console.log(visit);
      return (
        <p>
          Day {visit.day}: {visit.place.name}
        </p>
      );
    });
    return (
      <div>
        <h2>
          {schedule.city}: {schedule.start_day} -> {schedule.end_day}
        </h2>
        {visitsHTML}
      </div>
    );
  }
}
export default Schedule;
