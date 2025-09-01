import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import pages from '../navigation.js';
import { Footer, Sidebar, Topbar } from './components/index.js';

interface Props {
  // Readonly bgcolor?: string --- IGNORE ---
  readonly children?: React.ReactNode
}

const Main = ({
  children = null
}: Props) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = (): void => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38
  });

  return (
    <Box>
      <AppBar
        elevation={trigger ? 1 : 0}
        position="fixed"
        sx={{
          backgroundColor: trigger ? '#912210' : 'transparent',
          top: 0,
          transition: 'background-color 0.3s ease',
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
      >
        <Topbar onSidebarOpen={handleSidebarOpen} />
      </AppBar>
      <Sidebar
        open={open}
        pages={pages}
        variant="temporary"
        onClose={handleSidebarClose} />
      <main style={{ position: 'relative' }}>
        {children}
      </main>
      <Footer />
    </Box>
  );
};

Main.displayName = 'Main';
export default Main;
