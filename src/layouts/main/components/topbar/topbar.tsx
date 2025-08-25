/* eslint-disable @typescript-eslint/no-magic-numbers */
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';

import logo from '@assets/images/layoutDefault/logo.svg';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly onSidebarOpen: () => void
}

const Topbar = ({
  onSidebarOpen
}: Props) => {
  const theme = useTheme();

  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      sx={{
        px: '5rem',
        py: '1.25rem'
      }}
      width={1}
    >
      <Box
        component="a"
        display="flex"
        href="/"
        title="TReats"
        width={{ md: 120, xs: 100 }}
      >
        <Box
          component="img"
          src={logo}
          width="135px" />
      </Box>
      <Box alignItems="center" sx={{ display: { md: 'flex', xs: 'none' } }}>
        <Box
          component="a"
          href="/"
          marginLeft={4}
          sx={{
            textDecoration: 'none'
          }}
        >
          <Link
            href="/about-us"
            sx={{
              color: '#FAF4EA',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal'
            }}
            underline="none"
          >
            Tentang Kami
          </Link>
        </Box>
      </Box>
      <Box alignItems="center" sx={{ display: { md: 'none', xs: 'flex' } }}>
        <Button
          aria-label="Menu"
          sx={{
            borderColor: alpha(theme.palette.divider, 0.2),
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

Topbar.displayName = 'Topbar';
export default Topbar;
