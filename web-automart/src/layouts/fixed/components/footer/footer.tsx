import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid2 from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid2 container={true} spacing={2}>
      <Grid2>
        <Box
          alignItems="center"
          display="flex"
          flexDirection={{ sm: 'row', xs: 'column' }}
          justifyContent="space-between"
          width={1}
        >
          <Box
            component="a"
            display="flex"
            href="/"
            title="theFront"
            width={80}
          >
            <Box
              component="img"
              height={1}
              src={
                mode === 'light'
                  ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                  : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
              }
              width={1} />
          </Box>
          <Box alignItems="center" display="flex" flexWrap="wrap">
            <Box marginRight={2} marginTop={1}>
              <Link
                color="text.primary"
                component="a"
                href="/"
                underline="none"
                variant="subtitle2"
              >
                Home
              </Link>
            </Box>
            <Box marginRight={2} marginTop={1}>
              <Link
                color="text.primary"
                component="a"
                href="https://thefront.maccarianagency.com/docs/introduction"
                target="blank"
                underline="none"
                variant="subtitle2"
              >
                Documentation
              </Link>
            </Box>
            <Box marginTop={1}>
              <Button
                color="primary"
                component="a"
                href="https://mui.com/store/items/the-front-landing-page/"
                size="small"
                target="blank"
                variant="outlined"
              >
                Purchase now
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid2>
      <Grid2>
        <Typography
          align="center"
          color="text.secondary"
          gutterBottom={true}
          variant="subtitle2"
        >
          &copy; theFront. 2021, Maccarian. All rights reserved
        </Typography>
        <Typography
          align="center"
          color="text.secondary"
          component="p"
          variant="caption"
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid2>
    </Grid2>
  );
};

Footer.displayName = 'Footer';
export default Footer;
