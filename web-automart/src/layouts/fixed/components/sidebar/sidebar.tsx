import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { SidebarNav } from './components/index.js';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly onClose: () => void
  readonly open: boolean
  readonly pages: {
    groupTitle: string
    pages: PageItem[]
  }[]
  readonly variant: 'permanent' | 'persistent' | 'temporary' | undefined
}

const Sidebar = ({ pages, open, variant, onClose }: Props) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      sx={{
        '& .MuiPaper-root': {
          height: { md: 'calc(100% - 71px)', xs: '100%' },
          maxWidth: 256,
          top: { md: 71, xs: 0 },
          width: '100%'
        }
      }}
      variant={variant}
      onClose={() => onClose()}
    >
      <Box
        sx={{
          height: '100%',
          padding: 1,
          paddingTop: { sm: 3, xs: 2 }
        }}
      >
        <SidebarNav pages={pages} onClose={onClose} />
      </Box>
    </Drawer>
  );
};

Sidebar.displayName = 'Sidebar';
export default Sidebar;
