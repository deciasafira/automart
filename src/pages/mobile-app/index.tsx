import type { PageComponent } from '@nxweb/react';

import { MobileAppView } from '@views/mobile-app/view/index.js';

const MobileAppPage: PageComponent = () => {
  return <MobileAppView />;
};

MobileAppPage.displayName = 'MobileAppPage';
MobileAppPage.layout = 'default';
MobileAppPage.title = 'Mobile App';
export default MobileAppPage;
