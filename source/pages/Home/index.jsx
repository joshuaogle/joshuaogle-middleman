import React from 'react';
import './style.sass';

import BodyClass from '../../components/BodyClass';
import Intro from '../../components/Intro';

class Home extends React.Component {
  componentDidMount() {
    const animates = document.getElementsByClassName("animate");

    function isOnScreen(element) {
      var elementPosition = element.getBoundingClientRect();
      var elementTop = elementPosition.top;
      var scrollTop = window.pageYOffset;
      var screenHeight = document.documentElement.clientHeight;
      var screenBottom = scrollTop + screenHeight;
      var offset = 150;

      return screenBottom > (elementTop + offset);
    }

    var markAnimated = function() {
      for (var element of animates) {
        if (!element.classList.contains("animated")) {
          if (isOnScreen(element)) {
            element.classList.add("animated");
          }
        }
      }
    };

    if (animates.length > 0) {
      markAnimated();
      window.addEventListener("scroll", markAnimated);
    }
  }

  render() {
    return (
      <BodyClass className="home">
        <Intro className="home-intro">
          <h1>Joshua Ogle</h1>
          <div className="section-title"></div>
          <p>
            I'm a Product Designer and Developer,<br />
            making the internet a better place to live.
          </p>
        </Intro>

        <div className="content home-content">
          <div className="card">About</div>
          <div className="card">UX</div>
          <div className="card">Brand</div>
          <div className="card">Article</div>
        </div>
      </BodyClass>
    );
  }
}

export default Home;
