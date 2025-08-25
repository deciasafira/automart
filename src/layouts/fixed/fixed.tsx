import type { FC } from 'react';
import { useState } from 'react';

import Container from '@modules/@mui/material/Container/Container.js';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import type { LayoutProps } from '@nxweb/react';

import pages from '../navigation--docs.js';
import { Footer, Sidebar, Topbar } from './components/index.js';

interface Props {
  readonly children?: React.ReactNode
}

const BORDER_OPACITY = 0.1;

const DefaultLayout: FC<LayoutProps> = ({ children }: Props) => {
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

  return (
    <Box>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderBottom: `1px solid ${alpha(theme.palette.divider, BORDER_OPACITY)}`
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            py: { sm: 1.5, xs: 1 }
          }}
        >
          <Topbar onSidebarOpen={handleSidebarOpen} />
        </Container>
      </AppBar>
      <Sidebar
        open={open}
        pages={pages}
        variant={isMd ? 'permanent' : 'temporary'}
        onClose={handleSidebarClose} />
      <main>
        <Box height={{ md: 71, sm: 66, xs: 58 }} />
        <Box
          display="flex"
          flex="1 1 auto"
          overflow="hidden"
          paddingLeft={{ md: '256px' }}
        >
          <Box display="flex" flex="1 1 auto" overflow="hidden">
            <Box flex="1 1 auto" height="100%" overflow="auto">
              {children}
              <Divider />
              <Container sx={{ py: 4 }}>
                <Footer />
              </Container>
            </Box>
          </Box>
        </Box>
      </main>
    </Box>
  );
};

DefaultLayout.displayName = 'DefaultLayout';
export default DefaultLayout;
