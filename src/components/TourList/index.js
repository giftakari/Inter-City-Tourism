import React, { Component } from "react";
import "./tourlist.scss";
import Tour from "../Tour";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    const { tours } = this.state;
    const sortedTours = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sortedTours,
    });
  };

  render() {
    const { tours } = this.state;
    return (
      <React.Fragment>
        <section className="tourlist">
          {tours.map((tour) => (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>
          ))}
        </section>
      </React.Fragment>
    );
  }
}
