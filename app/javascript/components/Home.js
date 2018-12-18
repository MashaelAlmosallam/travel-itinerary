import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    let html = "";
    if (this.props.currentUser) {
      const id = this.props.schedules.id;
      html = (
        <div>
          <a href="/places/new">
            <button>Add a New Place</button>
          </a>
          <a href="/schedules/new">
            <button>plan your Trip</button>
          </a>
          {/* <Link to={`/schedules/${schedule.user.id}`} /> */}

          <a href="/schedules/id">
            {JSON.stringify(this.props.schedules.id)}
            <button>View Itinerary</button>
          </a>
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
