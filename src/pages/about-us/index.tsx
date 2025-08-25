import type { PageComponent } from '@nxweb/react';

import { AboutUsView } from '@src/views/about-us/view/index.js';

const AboutUsPage: PageComponent = () => {
  return <AboutUsView />;
};

AboutUsPage.displayName = 'AboutUsPage';
AboutUsPage.layout = 'default';
AboutUsPage.title = 'About Us';
export default AboutUsPage;
