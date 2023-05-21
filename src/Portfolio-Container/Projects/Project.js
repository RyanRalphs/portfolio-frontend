import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import scrollService from "../../utils/scrollService";
import animations from "../../utils/animations";
import "./Project.css";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== screen) {
      return;
    }
    animations.animations.fadeInScreen(props.id);
  };

  scrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={
          "You can find and clone any of my projects from my Github link"
        }
      />
      <section className="project-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="projects-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      "This is a Weather App that will fetch you live weather
                      data using Mapbox and Weatherstack, then use the geocoding
                      information to get a photo from the Google Places API!"
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="list-unstyled">
                      <span className="blobs">node.js</span>
                      <span className="blobs">Express.js</span>
                      <span className="blobs">HTML/CSS</span>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img
                      src={require(`./project-images/weather.png`)}
                      alt="Ooops!"
                    />
                    <h5>Weather App</h5>
                    <p>Created in 2019</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      "A fun one to create, this is a Task REST API that has
                      user auth with JWTs and a full CRUD interface. This
                      supports media uploads and email sending too."
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="list-unstyled">
                      <span className="blobs">node.js</span>
                      <span className="blobs">Express.js</span>
                      <span className="blobs">MongoDB/Mongoose</span>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img
                      src={require(`./project-images/rest-api.png`)}
                      alt="Ooops!"
                    />
                    <h5>Task Rest API</h5>
                    <p>Created in 2019</p>
                    <p>
                      Can be found on my Github complete with an automated
                      Postman collection!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      "A simple CLI app that will take an action argument and
                      perform CRUD operations on a JSON file based on what was
                      specificed."
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="list-unstyled">
                      <span className="blobs">Golang</span>
                      <span className="blobs">StormDB</span>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img
                      src={require(`./project-images/cli.png`)}
                      alt="Ooops!"
                    />
                    <h5>Habitfield - CLI App</h5>
                    <p>Available for running locally via GitHub.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      "A proof of concept app I created to help in combatting my
                      natural dislike and distrust for mocked services in
                      tests."
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="list-unstyled">
                      <span className="blobs">Golang</span>
                      <span className="blobs">React JS</span>
                      <span className="blobs">Typescript</span>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img
                      src={require(`./project-images/testing.png`)}
                      alt="Ooops!"
                    />
                    <h5>Contract Tester</h5>
                    <p>Available for running locally via GitHub.</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={require("./project-images/shape-bg.png")} />
      </div>
    </div>
  );
}
