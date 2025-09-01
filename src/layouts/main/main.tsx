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
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}
  >
    {/* Topbar */}
    <AppBar
      elevation={trigger ? 1 : 0}
      position="fixed"
      sx={{
        backgroundColor: trigger ? '#F2F7FFB2' : 'transparent',
        top: 0,
        transition: 'background-color 0.3s ease',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
    </AppBar>

    {/* Sidebar */}
    <Sidebar
      open={open}
      pages={pages}
      variant="temporary"
      onClose={handleSidebarClose} />

    {/* Content */}
    <Box
      component="main"
      sx={{
        flex: 1,
        mt: '64px',
        position: 'relative'
      }}
    >
      {children}
    </Box>

    <Footer />
  </Box>
  );
};

Main.displayName = 'Main';
export default Main;
