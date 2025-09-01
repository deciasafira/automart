import type { PageComponent } from '@nxweb/react';

import { DistributorCenterView } from '@views/distributor-center/view/index.js';

const DistributorCenterPage: PageComponent = () => {
  return <DistributorCenterView />;
};

DistributorCenterPage.displayName = 'DistributorCenterPage';
DistributorCenterPage.layout = 'default';
DistributorCenterPage.title = 'Distributor Center';
export default DistributorCenterPage;
