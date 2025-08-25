import React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ThemeModeToggler from '@components/top-mode-toggler.js';

interface Props {
  readonly colorInvert?: boolean
}

const TopNav = ({ colorInvert = false }: Props) => {
  return (
    <Box alignItems="center" display="flex" justifyContent="flex-end">
      <Box marginRight={{ sm: 2, xs: 1 }}>
        <Link
          color={colorInvert ? 'common.white' : 'text.primary'}
          component="a"
          href="/demos"
          sx={{ alignItems: 'center', display: 'flex' }}
          underline="none"
        >
          Demos
          <Box
            bgcolor="primary.main"
            borderRadius={1}
            display="inline-flex"
            marginLeft={1}
            padding={0.5}
          >
            <Typography
              sx={{ color: 'common.white', lineHeight: 1 }}
              variant="caption"
            >
              new
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box marginRight={{ sm: 2, xs: 1 }}>
        <Link
          color={colorInvert ? 'common.white' : 'text.primary'}
          component="a"
          href="/blocks"
          sx={{ alignItems: 'center', display: 'flex' }}
          underline="none"
        >
          Components
        </Link>
      </Box>
      <Box marginRight={{ sm: 2, xs: 1 }}>
        <Link
          color={colorInvert ? 'common.white' : 'text.primary'}
          component="a"
          href="https://thefront.maccarianagency.com/docs/introduction"
          target="blank"
          underline="none"
        >
          Docs
        </Link>
      </Box>
      <Box>
        <ThemeModeToggler />
      </Box>
    </Box>
  );
};

TopNav.displayName = 'TopNav';
export default TopNav;
