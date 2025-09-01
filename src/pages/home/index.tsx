import type { PageComponent } from '@nxweb/react';

import { HomeView } from '@views/home/view/index.js';

const HomePage: PageComponent = () => {
  return <HomeView />;
};

HomePage.displayName = 'HomePage';
HomePage.layout = 'default';
HomePage.title = 'Beranda';
export default HomePage;
