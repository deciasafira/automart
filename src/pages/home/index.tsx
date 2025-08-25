import { Typography } from '@mui/material';

import type { PageComponent } from '@nxweb/react';

const HomePage: PageComponent = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Typography variant="h1">
          HomePage
        </Typography>
      </header>
    </div>
  );
};

HomePage.displayName = 'HomePage';

export default HomePage;
