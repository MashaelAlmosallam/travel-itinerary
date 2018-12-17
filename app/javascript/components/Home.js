import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Travel Itinerary Web Page</h1>
        <a href="/places/new">
          <button>Add a New Place</button>
        </a>
        <a href="/schedules/new">
          <button>plan your Trip</button>
        </a>
        <Link to="/schedule">
          <button>your Itinerary</button>
        </Link>
      </div>
    );
  }
}

export default Home;
