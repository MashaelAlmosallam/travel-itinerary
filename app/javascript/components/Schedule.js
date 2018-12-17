import React from "react";
import { Link } from "react-router-dom";
class Schedule extends React.Component {
  constructor(props) {
    super();
    this.state = { userSchedule: null };
  }
  render() {
    if (this.state.userSchedule === null) {
      return <h2>Loading...</h2>;
    }
    const listItems = this.state.userSchedule.map(place => {
      return (
        <li key={place.id}>
          <a href={place.html_url}>{place.name}</a>
        </li>
      );
    });
    return (
      <div>
        <ul>
          <Link to="/schedules/show" />;
        </ul>
      </div>
    );
  }
}
export default Schedule;
