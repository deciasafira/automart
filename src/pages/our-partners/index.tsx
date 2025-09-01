import type { PageComponent } from '@nxweb/react';

import { OurPartnersView } from '@views/our-partners/view/index.js';

const OurPartnersPage: PageComponent = () => {
  return <OurPartnersView />;
};

OurPartnersPage.displayName = 'OurPartnersPage';
OurPartnersPage.layout = 'default';
OurPartnersPage.title = 'Distributor Center';
export default OurPartnersPage;
