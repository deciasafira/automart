/* eslint-disable @typescript-eslint/no-magic-numbers */
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import appstore from '@assets/images/AppStoreButtons.svg';
import playstore from '@assets/images/PlayStoreButtons.svg';
import logo from '@assets/images/layoutDefault/automart.svg';

interface Props {
  readonly onSidebarOpen: () => void
}

const Topbar = ({ onSidebarOpen }: Props) => {
  const theme = useTheme();

  return (
    <Box
      component="nav"
      sx={{
        alignItems: 'center',
        display: 'flex',
        height: 80,
        justifyContent: 'space-between',
        px: { md: 14, xs: 4 },
        width: 1,
        zIndex: 10
      }}
    >
      {/* Left Side (logo + menu) */}
      <Box sx={{ alignItems: 'center', display: 'flex', gap: 4 }}>
        {/* Logo */}
        <Box sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
          <Box
            alt="Automart Logo"
            component="img"
            src={logo}
            sx={{ height: 48, width: 48 }} />
          <Typography
            sx={{
              color: '#3A68E0',
              fontFamily: 'Helvetica',
              fontSize: 24,
              fontWeight: 700
            }}
          >
            AUTOMART
          </Typography>
        </Box>

        {/* Menu - Desktop only */}
        <Box sx={{ alignItems: 'center', display: { md: 'flex', xs: 'none' }, gap: 5, id: 'beranda' }}>
          <Typography sx={{ color: '#2869E8', fontFamily: 'Open Sauce One', fontSize: 16, fontWeight: 500 }}>
            Beranda
          </Typography>
          <Box sx={{ alignItems: 'center', color: '#1C252E', display: 'flex', gap: 1, id: 'tentang-kami' }}>
            <Typography component={Link} href="/about-us" sx={{ color: 'inherit', fontFamily: 'Open Sauce One', fontSize: 16, fontWeight: 500 }} underline="none">
              Tentang Kami
            </Typography>
          </Box>
          <Typography sx={{ color: '#1C252E', fontFamily: 'Open Sauce One', fontSize: 16, fontWeight: 500, id: 'berita' }}>
            Berita
          </Typography>
          <Typography sx={{ color: '#1C252E', fontFamily: 'Open Sauce One', fontSize: 16, fontWeight: 500, id: 'bantuan' }}>
            Bantuan
          </Typography>
        </Box>
      </Box>

      {/* Right side (store badges / mobile menu) */}
      <Box sx={{ alignItems: 'center', display: 'flex', gap: 2 }}>
        {/* Store badges - Desktop */}
        <Box sx={{ display: { md: 'flex', xs: 'none' }, gap: 2 }}>
          <Box
            alt="Google Play"
            component="img"
            src={playstore}
            sx={{
              '&:active': { transform: 'scale(0.95)' },
              '&:hover': { transform: 'scale(1.05)' },
              cursor: 'pointer',
              height: 40,
              transition: 'transform 0.2s ease-in-out',
              width: 135
            }}
            onClick={() => window.open('https://play.google.com/store', '_blank')} />
          <Box
            alt="App Store"
            component="img"
            src={appstore}
            sx={{
              '&:active': { transform: 'scale(0.95)' },
              '&:hover': { transform: 'scale(1.05)' },
              cursor: 'pointer',
              height: 40,
              transition: 'transform 0.2s ease-in-out',
              width: 135
            }}
            onClick={() => window.open('https://www.apple.com/app-store/', '_blank')} />
        </Box>

        {/* Mobile menu button */}
        <Box sx={{ display: { md: 'none', xs: 'flex' } }}>
          <Button
            aria-label="Menu"
            sx={{
              borderColor: alpha(theme.palette.divider, 0.2),
              borderRadius: 2,
              minWidth: 'auto',
              p: 1
            }}
            variant="outlined"
            onClick={() => onSidebarOpen()}
          >
            <MenuIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

Topbar.displayName = 'Topbar';
export default Topbar;
