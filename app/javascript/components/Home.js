import React from "react"
import { Link } from "react-router-dom"
class Home extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Travel Itinerary Web Page</h1>
        <Link to="/schedule">
          <button >Plan your Trip</button>
        </Link>
      </div>
    );
  }
}

export default Home
