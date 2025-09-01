import type { PageComponent } from '@nxweb/react';

import { OurServicesView } from '@src/views/our-services/view/index.js';

const OurServicesPage: PageComponent = () => {
  return <OurServicesView />;
};

OurServicesPage.displayName = 'OurServicePage';
OurServicesPage.layout = 'default';
OurServicesPage.title = 'Our Services';
export default OurServicesPage;
