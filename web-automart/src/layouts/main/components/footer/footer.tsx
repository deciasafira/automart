import { Email, Facebook, Instagram, LinkedIn, Phone, Place } from '@mui/icons-material';
import { Link, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import appStore from '@assets/images/app-store.svg';
import googlePlay from '@assets/images/google-play.svg';
import tiktok from '@assets/images/tiktok.svg';

const iconStyle = {
  '&:active': { transform: 'scale(0.9)' },
  '&:hover': { transform: 'scale(1.1)' },
  color: '#FFFFFF',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out'
};

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#57140A', px: '4.375rem', py: '2.563rem' }}>
      <Grid container={true} spacing={2}>
        <Grid size={4}>
          <Stack direction="column" spacing={2}>
            <Typography color="#FFFFFF" fontWeight="bold" variant="body1">PT. Toko Rumahan Indonesia</Typography>
            <Typography color="#FFFFFF" variant="body2">
              TokoRumahan membantu produk rumahan menjangkau pasar yang lebih luas dengan memanfaatkan teknologi terbaru yang mudah digunakan siapapun.
            </Typography>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'start'
              }}
            >
              {/* Instagram */}
              <Instagram sx={iconStyle} onClick={() => window.open('https://www.instagram.com/tokrumnet', '_blank')} />

              {/* TikTok */}
              <Box
                alt="tiktok"
                component="img"
                src={tiktok}
                sx={{
                  '&:active': { transform: 'scale(0.9)' },
                  '&:hover': { transform: 'scale(1.1)' },
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease-in-out'
                }}
                onClick={() => window.open('https://www.tiktok.com/@tokorumahan', '_blank')} />

              {/* LinkedIn */}
              <LinkedIn sx={iconStyle} onClick={() => window.open('https://id.linkedin.com/company/tokorumahan', '_blank')} />

              {/* Facebook */}
              <Facebook sx={iconStyle} onClick={() => window.open('https://www.facebook.com/tokrumnet', '_blank')} />
            </Box>
            <Box sx={{ alignItems: 'center', display: 'flex', gap: '0.5rem', justifyContent: 'start' }}>
              <Place sx={{ color: '#FFFFFF' }} />
              <Typography color="#FFFFFF" variant="body2">Jalan Hegarmanah No. 28, Bandung 40141</Typography>
            </Box>
            <Box sx={{ alignItems: 'center', display: 'flex', gap: '0.5rem', justifyContent: 'start' }}>
              <Box
                alt="google-play"
                component="img"
                src={googlePlay}
                sx={{
                  '&:active': {
                    transform: 'scale(0.95)'
                  },
                  '&:hover': {
                    transform: 'scale(1.05)'
                  },
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease-in-out'
                }}
                onClick={() => window.open('https://play.google.com/store', '_blank')} />
              <Box
                alt="app-store"
                component="img"
                src={appStore}
                sx={{
                  '&:active': {
                    transform: 'scale(0.95)'
                  },
                  '&:hover': {
                    transform: 'scale(1.05)'
                  },
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease-in-out'
                }}
                onClick={() => window.open('https://www.apple.com/app-store/', '_blank')} />
            </Box>
          </Stack>
        </Grid>
        <Grid gap={6} size={8} sx={{ display: 'flex', justifyContent: 'end' }}>
          <Stack spacing={1}>
            <Typography color="#FFFFFF" fontWeight="bold" variant="h5">
              Perusahaan
            </Typography>
            <Link color="#FFFFFF" href="/about-us" underline="none"> Tentang Kami</Link>
            <Link color="#FFFFFF" href="/term-and-condition" underline="none"> Syarat dan Ketentuan</Link>
            <Link color="#FFFFFF" href="/privacy-policy" underline="none"> Kebijakan Privasi</Link>
          </Stack>
          <Stack spacing={1}>
            <Typography color="#FFFFFF" fontWeight="bold" variant="h5">
              Hubungi Kami
            </Typography>
            <Typography color="#FFFFFF" fontWeight="bold" sx={{ alignItems: 'center', display: 'flex', gap: '0.5rem' }} textAlign="center" variant="body2">
              <Phone />
              +62 813 2127 9873
            </Typography>
            <Typography color="#FFFFFF" fontWeight="bold" sx={{ alignItems: 'center', display: 'flex', gap: '0.5rem' }} textAlign="center" variant="body2">
              <Email />
              info@tokorumahan.com
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Typography
        align="center"
        color="#FFFFFF"
        gutterBottom={true}
        variant="body2"
      >
        Copyright ©2025 All rights reserved | TokoRumahan Indonesia
      </Typography>
    </Box>
  );
};

Footer.displayName = 'Footer';
export default Footer;
