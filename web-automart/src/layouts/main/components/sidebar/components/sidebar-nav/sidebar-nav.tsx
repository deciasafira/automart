import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import { NavItem } from './components/nav-item/index.js';

interface Props {
  readonly pages: {
    account: PageItem[]
    blog: PageItem[]
    company: PageItem[]
    landings: PageItem[]
    portfolio: PageItem[]
    secondary: PageItem[]
  }
}

const SidebarNav = ({ pages }: Props) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages
  } = pages;

  return (
    <Box>
      <Box paddingX={2} paddingY={1} width={1}>
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
              mode === 'light'
                ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
            }
            width={1} />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem items={landingPages} title="Landings" />
        </Box>
        <Box>
          <NavItem items={companyPages} title="Company" />
        </Box>
        <Box>
          <NavItem items={secondaryPages} title="Pages" />
        </Box>
        <Box>
          <NavItem items={accountPages} title="Account" />
        </Box>
        <Box>
          <NavItem items={blogPages} title="Blog" />
        </Box>
        <Box>
          <NavItem items={portfolioPages} title="Portfolio" />
        </Box>
        <Box marginTop={2}>
          <Button
            component="a"
            fullWidth={true}
            href="https://thefront.maccarianagency.com/docs/introduction"
            size="large"
            target="blank"
            variant="outlined"
          >
            Documentation
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            color="primary"
            component="a"
            fullWidth={true}
            href="https://mui.com/store/items/the-front-landing-page/"
            size="large"
            target="blank"
            variant="contained"
          >
            Purchase now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.displayName = 'SidebarNav';
export default SidebarNav;
