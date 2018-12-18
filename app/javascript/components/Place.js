import React from "react";
import PropTypes from "prop-types";
class Place extends React.Component {
  constructor(props) {
    super();
    this.state = { allPlaces: null };
  }
  componentDidMount() {
    fetch("/places", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          posts: data
        });
      });
  }
  render() {
    if (this.state.allPlaces === null) {
      return <h2>Loading...</h2>;
    }
    const places = this.state.places;
    const list = places.map(post => {
      return (
        <li>
          <Link to={`/places/${places.id}`}>{place.name}</Link>
        </li>
      );
    });
    return (
      <div>
        <h2>All places</h2>
        <ul>{list}</ul>
      </div>
    );
  }
}
export default Place;
