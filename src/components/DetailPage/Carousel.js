import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";

const BACKDROP_PATH = "http://image.tmdb.org/t/p/w300";

class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: "20px"
    };
    console.log(this.props);
    return (
      <Slider {...settings}>
        {this.props.recommandations.map((recommandation, i) => {
          return (
            <div key={i}>
              <div
                onClick={() => {
                  console.log(recommandation.id);
                  this.props.history.push(`/movie/${recommandation.id}`);
                }}
                className="recommandation-movie-bg shadow"
                style={{
                  borderRadius: "5px",
                  backgroundRepeat: "no-repeat",
                  background: `url(${BACKDROP_PATH}${
                    recommandation.backdrop_path
                  })`
                }}
              />
              <div className="recommandation-inner-content">
                <a href={`/movie/${recommandation.id}`}>
                  {recommandation.title}
                </a>{" "}
                <p style={{ marginLeft: "20px" }}>
                  {recommandation.vote_average}
                  <i className="fas fa-star" />
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    );
  }
}

export default withRouter(Carousel);
