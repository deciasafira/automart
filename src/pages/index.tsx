import type { PageComponent } from '@nxweb/react';

import Container from '@components/container.js';
import LandingPage from '@views/landing-page/index.js';

const Index: PageComponent = () => {
  return (
      <Container>
        <LandingPage />
      </Container>
  );
};

Index.displayName = 'Index';
Index.layout = 'default';
export default Index;
