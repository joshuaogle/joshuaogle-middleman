import React from 'react';

import BodyClass from '../../components/BodyClass';
import Page from '../../components/Page';
import Intro from '../../components/Intro';
import Gallery from '../../sections/Gallery';
import Clients from '../../sections/Clients';
import CaseStudies from '../../sections/CaseStudies';
import Tools from '../../sections/Tools';

class Work extends React.Component {
  render() {
    return (
      <BodyClass className="work">
	<Page>
          <Intro className="work-intro">
            <h1>Make them fall in love</h1>
            <p>
              It's not enough to make something pretty, and you can't just make it functional either.
              A great experience is making the user feel at home, showing them a better way to get things done.
              A great design isn't even about you.
              &nbsp;<mark>It's about what it does for the user.</mark>
            </p>
          </Intro>
          <div className="content">
            <Clients />
            <CaseStudies />
	    {/*<Gallery />*/}	
            <Tools />
          </div>
	</Page>
      </BodyClass>
    );
  }
}

export default Work;
