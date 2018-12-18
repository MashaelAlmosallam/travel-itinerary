import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
  constructor() {
    super();
    this.state = { schedules: null };
  }
  componentDidMount() {
    fetch("/schedules", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ schedules: data });
      });
  }
  render() {
    let schedulesHTML = <p>Loading...</p>;
    if (this.state.schedules) {
      const schedules = this.state.schedules.map(function(schedule) {
        return (
          <p>
            {schedule.city}: {schedule.start_day} -> {schedule.end_day}
            <Link to={`/schedules/${schedule.id}`}>
              {/* JSON.stringify(this.props.schedules.id)} */}
              <button>View Itinerary</button>
            </Link>
          </p>
        );
      });
      schedulesHTML = <div>{schedules}</div>;
    }
    let html = "";
    if (this.props.currentUser) {
      const id = this.props.schedules[this.props.schedules.length - 1].id;
      html = (
        <div>
          <h1>Your Trips</h1>
          {schedulesHTML}
          <a href="/places/new">
            <button>Add a New Place</button>
          </a>
          <a href="/schedules/new">
            <button>plan your Trip</button>
          </a>
          {/* <Link to={`/schedules/${schedule.user.id}`} /> */}
        </div>
      );
    }

    return (
      <div>
        <h1>Travel Itinerary Web Page</h1>
        {html}
      </div>
    );
  }
}

export default Home;
