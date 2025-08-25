import React from 'react';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import NoSsr from '@mui/material/NoSsr';
import Zoom from '@mui/material/Zoom';
import { useTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Container from '@components/container.js';
import TopNav from '@components/top-nav.js';

import { Footer } from './components/index.js';

interface Props {
  readonly bgcolor?: string
  readonly children?: React.ReactNode
  readonly colorInvert?: boolean
}

const Fluid = ({
  children,
  colorInvert = false,
  bgcolor = 'alternate.main'
}: Props) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  const scrollTo = (id: string): void => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`) as HTMLElement | null;
      if (!element) {
        return;
      }

      window.scrollTo({ behavior: 'smooth', left: 0, top: element.offsetTop });
    });
  };

  return (
    <Box id="js--fluid-top">
      <AppBar
        elevation={0}
        position="relative"
        sx={{
          backgroundColor: bgcolor,
          top: 0
        }}
      >
        <Container
          maxWidth={1500}
          paddingBottom="0 !important"
          paddingTop="8px !important"
        >
          <TopNav colorInvert={colorInvert} />
        </Container>
        <Container maxWidth={1500} paddingY={1}>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
            width={1}
          >
            <Box
              component="a"
              display="flex"
              href="/"
              title="theFront"
              width={{ md: 120, xs: 100 }}
            >
              <Box
                component="img"
                height={1}
                src={
                  mode === 'light' && !colorInvert
                    ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                    : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
                }
                width={1} />
            </Box>
            <Button
              color="primary"
              component="a"
              href="https://mui.com/store/items/the-front-landing-page/"
              size="large"
              target="blank"
              variant="contained"
            >
              Buy now
            </Button>
          </Box>
        </Container>
      </AppBar>
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
      <NoSsr>
        <Zoom in={trigger}>
          <Box
            role="presentation"
            sx={{ bottom: 24, position: 'fixed', right: 32 }}
            onClick={() => scrollTo('js--fluid-top')}
          >
            <Fab aria-label="scroll back to top" color="primary" size="small">
              <KeyboardArrowUpIcon />
            </Fab>
          </Box>
        </Zoom>
      </NoSsr>
    </Box>
  );
};

Fluid.displayName = 'Fluid';
export default Fluid;
