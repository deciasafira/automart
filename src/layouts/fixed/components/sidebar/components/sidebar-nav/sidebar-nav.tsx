/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly onClose: () => void
  readonly pages: {
    groupTitle: string
    pages: PageItem[]
  }[]
}

const SidebarNav = ({ pages, onClose }: Props) => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  return (
    <Box paddingBottom={2}>
      <Box
        display={{ md: 'none', xs: 'flex' }}
        justifyContent="flex-end"
        onClick={() => onClose()}
      >
        <CloseIcon fontSize="small" />
      </Box>
      <Box paddingX={2}>
        {pages.map((item, i) => (
          <Box key={i} marginBottom={3}>
            <Typography
              sx={{
                display: 'block',
                fontWeight: 700,
                marginBottom: 1,
                textTransform: 'uppercase'
              }}
              variant="caption"
            >
              {item.groupTitle}
            </Typography>
            <Box>
              {item.pages.map((p, i) => (
                <Box key={i} marginBottom={1 / 2}>
                  <Button
                    component="a"
                    fullWidth={true}
                    href={p.href}
                    sx={{
                      backgroundColor:
                        activeLink === p.href
                          ? alpha(theme.palette.primary.main, 0.1)
                          : 'transparent',
                      color:
                        activeLink === p.href
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                      fontWeight: activeLink === p.href ? 600 : 400,
                      justifyContent: 'flex-start'
                    }}
                    target={p.target}
                    onClick={() => onClose()}
                  >
                    {p.title}
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Box>
        <Button component="a" fullWidth={true} href="/" variant="outlined">
          Browse pages
        </Button>
      </Box>
      <Box marginTop={1}>
        <Button
          color="primary"
          component="a"
          fullWidth={true}
          href="https://mui.com/store/items/the-front-landing-page/"
          target="blank"
          variant="contained"
        >
          Purchase now
        </Button>
      </Box>
    </Box>
  );
};

SidebarNav.displayName = 'SidebarNav';
export default SidebarNav;
