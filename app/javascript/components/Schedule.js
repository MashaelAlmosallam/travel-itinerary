import React from "react";
import { Link } from "react-router-dom";
class Schedule extends React.Component {
  constructor(props) {
    super();
    this.state = { userPlaces: null };
  }
  render() {
    if (this.state.userPlaces === null) {
      return <h2>Loading...</h2>;
    }
    const listItems = this.state.userPlaces.map(place => {
      return (
        <li key={place.id}>
          <a href={place.html_url}>{place.name}</a>
        </li>
      );
    });
    return (
      <div>
        <h2>All {this.props.name}'s Schedulexs</h2>
        <ul>{listItems}</ul>
      </div>
    );
  }
}
export default Schedule;
