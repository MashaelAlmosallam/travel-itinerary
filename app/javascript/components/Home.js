import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

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
      const schedules = this.state.schedules.map(function (schedule) {
        return (
          <p>
            {schedule.city}: From date
            <Moment format="MM/DD/YYYY">{schedule.start_day}</Moment> to
            <Moment format="MM/DD/YYYY">{schedule.end_day}</Moment>
            <Link to={`/schedules/${schedule.id}`}>
              {/* JSON.stringify(this.props.schedules.id)} */}
              <button class="btn1" >View Itinerary</button>
            </Link>
          </p>
        );
      });
      schedulesHTML = <div>{schedules}</div>;
    }
    let html = "";
    if (this.props.currentUser) {
      if (this.props.schedules[this.props.schedules.length - 1]) {
        const id = this.props.schedules[this.props.schedules.length - 1].id;
      }

      html = (
        <div>
          <h4 class="trips_title">Your Trips</h4>
          {schedulesHTML}
          <a href="/places/new">
            <button class="btnr">Add a New Place</button>
          </a>
          <a href="/schedules/new">
            <button class="btnb">plan your Trip</button>
          </a>
          {/* <Link to={`/schedules/${schedule.user.id}`} /> */}
        </div>
      );
    }

    return (
      <div class="about">
        <h3>Travel Itinerary Web Page</h3>
        <p> Keep all your travel plans in one place and access your itineraries anytime </p>
        {html}
      </div>
    );
  }
}

export default Home;
