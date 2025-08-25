import React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { SidebarNav } from './components/index.js';

interface Props {
  readonly onClose: () => void
  readonly open: boolean
  readonly pages: {
    account: PageItem[]
    blog: PageItem[]
    company: PageItem[]
    landings: PageItem[]
    portfolio: PageItem[]
    secondary: PageItem[]
  }
  readonly variant: 'permanent' | 'persistent' | 'temporary' | undefined
}

const Sidebar = ({ pages, open, variant, onClose }: Props) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      sx={{
        '& .MuiPaper-root': {
          maxWidth: 280,
          width: '100%'
        }
      }}
      variant={variant}
      onClose={() => onClose()}
    >
      <Box
        sx={{
          height: '100%',
          padding: 1
        }}
      >
        <SidebarNav pages={pages} />
      </Box>
    </Drawer>
  );
};

Sidebar.displayName = 'Sidebar';
export default Sidebar;
