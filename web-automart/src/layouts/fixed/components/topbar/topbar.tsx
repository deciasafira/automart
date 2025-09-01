import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { alpha, useTheme } from '@mui/material/styles';

import ThemeModeToggler from '@components/top-mode-toggler.js';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly onSidebarOpen: () => void
}

const BORDER_OPACITY = 0.2;

const Topbar = ({ onSidebarOpen }: Props) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
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
            mode === 'light'
              ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
              : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
          }
          width={1} />
      </Box>
      <Box alignItems="center" sx={{ display: { md: 'flex', xs: 'none' } }}>
        <Box marginLeft={3}>
          <Link color="text.primary" component="a" href="/" underline="none">
            Home
          </Link>
        </Box>
        <Box marginLeft={3}>
          <Link
            color="text.primary"
            component="a"
            href="/home"
            underline="none"
          >
            Pages
          </Link>
        </Box>
        <Box marginLeft={3}>
          <Link
            color="text.primary"
            component="a"
            href="/blocks"
            underline="none"
          >
            Components
          </Link>
        </Box>
        <Box marginLeft={3}>
          <Link
            color="text.primary"
            component="a"
            href="/demos"
            underline="none"
          >
            Demos
          </Link>
        </Box>
        <Box marginLeft={3}>
          <ThemeModeToggler />
        </Box>
        <Box marginLeft={3}>
          <Button
            color="primary"
            component="a"
            href="https://mui.com/store/items/the-front-landing-page/"
            size="large"
            target="blank"
            variant="contained"
          >
            Purchase now
          </Button>
        </Box>
      </Box>
      <Box alignItems="center" sx={{ display: { md: 'none', xs: 'flex' } }}>
        <Box marginRight={1}>
          <ThemeModeToggler />
        </Box>
        <Button
          aria-label="Menu"
          sx={{
            borderColor: alpha(theme.palette.divider, BORDER_OPACITY),
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1
          }}
          variant="outlined"
          onClick={() => onSidebarOpen()}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.displayName = 'TopBar';
export default Topbar;
