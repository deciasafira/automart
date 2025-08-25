import Container from '@components/container.js';

import AboutUsSectionOne from '../section-one.js';
import AboutUsSectionThree from '../section-three.js';
import AboutUsSectionTwo from '../section-two.js';

const AboutUsView = () => {
  return (
    <>
      <Container marginTop="5rem">
        <AboutUsSectionOne />
      </Container>
      <AboutUsSectionTwo />
      <Container>
        <AboutUsSectionThree />
      </Container>
    </>
  );
};

AboutUsView.displayName = 'AboutUsView';
export { AboutUsView };
