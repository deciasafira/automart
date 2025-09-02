import { Email, Phone, Place } from '@mui/icons-material';
import { Link, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import appStore from '@assets/images/AppStoreButtons.svg';
import playstore from '@assets/images/google-play.svg';
import Facebook from '@assets/images/layoutDefault/FacebookButton.svg';
import Instagram from '@assets/images/layoutDefault/InstagramButton.svg';
import LinkedIn from '@assets/images/layoutDefault/LinkedinButton.svg';
import Twitter from '@assets/images/layoutDefault/TwitterButton.svg';
import logo from '@assets/images/layoutDefault/automart.svg';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        alignItems: 'center',
        backgroundColor: '#2044AD',
        borderTop: '1px solid rgba(145, 158, 171, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        height: '410px',
        width: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column' },
          gap: { md: '40px', xs: '80px' },
          justifyContent: 'space-between',
          maxWidth: '1440px',
          px: { md: '40px', xs: '144px' },
          py: '80px',
          width: '100%'
        }}
      >
        {/* Company Info */}
        <Stack spacing={4} sx={{ width: 508 }}>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: '8px',
              display: 'flex',
              gap: '8px',
              height: 68,
              px: '18px',
              py: '10px',
              width: 229
            }}
          >
    <Box
      alt="Automart Logo"
      component="img"
      src={logo}
      sx={{ height: 48, width: 48 }} />
    <Typography
      sx={{
        color: '#3A68E0',
        fontFamily: 'Helvetica, sans-serif',
        fontSize: 24,
        fontWeight: 700
      }}
    >
      AUTOMART
    </Typography>
          </Box>
          <Typography
            sx={{
              color: '#DFE3E8',
              fontFamily: 'Open Sauce One',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '20px'
            }}
          >
            Bantu bengkel dan toko sparepart untuk dapat harga terbaik <br />
            langsung dari sumbernya. Stok lebih pasti, margin makin untung.
          </Typography>
          <Stack spacing={2}>
            <Typography
              sx={{
                color: '#fff',
                fontFamily: 'Open Sauce One',
                fontSize: '18px',
                fontWeight: 600
              }}
            >
              Apps
            </Typography>
            <Stack direction="row" spacing={2}>
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
                src={appStore}
                sx={{
                  '&:active': { transform: 'scale(0.95)' },
                  '&:hover': { transform: 'scale(1.05)' },
                  cursor: 'pointer',
                  height: 40,
                  transition: 'transform 0.2s ease-in-out',
                  width: 135
                }}
                onClick={() => window.open('https://www.apple.com/app-store/', '_blank')} />
            </Stack>
          </Stack>
        </Stack>

        {/* Company Links */}
        <Stack spacing={1.25} sx={{ width: '148px' }}>
          <Typography
            sx={{
              color: '#fff',
              fontFamily: 'Open Sauce One',
              fontSize: '18px',
              fontWeight: 600
            }}
          >
            Perusahaan
          </Typography>
          {[
            { href: '/about-us', text: 'Tentang Kami' },
            { href: '/news', text: 'Artikel & Berita' },
            { href: '/career', text: 'Karir' },
            { href: '/term-and-condition', text: 'Syarat & Ketentuan' },
            { href: '/privacy-policy', text: 'Kebijakan Privasi' }
          ].map((link) => (
            <Link
              href={link.href}
              key={link.text}
              sx={{
                '&:hover': { textDecoration: 'underline' },
                color: '#DFE3E8',
                fontFamily: 'Open Sauce One',
                fontSize: '16px',
                fontWeight: 400
              }}
              underline="none"
            >
              {link.text}
            </Link>
          ))}
        </Stack>

        {/* Contact & Social */}
        <Stack
          alignItems="flex-end"
          spacing={4}
          sx={{ width: 'fit-content' }}
        >
          {/* Contact */}
          <Stack spacing={2} sx={{ width: '282px' }}>
            <Typography
              sx={{
                color: '#fff',
                fontFamily: 'Open Sauce One',
                fontSize: '18px',
                fontWeight: 600
              }}
            >
              Hubungi Kami
            </Typography>
            <Stack alignItems="center" direction="row" spacing={1.25}>
              <Place sx={{ color: '#fff' }} />
              <Typography sx={{ color: '#DFE3E8', fontSize: '16px' }}>
                Jl. Hegarmanah No. 28, Kota Bandung, 40141
              </Typography>
            </Stack>
            <Stack alignItems="center" direction="row" spacing={1.25}>
              <Phone sx={{ color: '#fff' }} />
              <Typography sx={{ color: '#DFE3E8', fontSize: '16px' }}>
                +62 851 7435 9728
              </Typography>
            </Stack>
            <Stack alignItems="center" direction="row" spacing={1.25}>
              <Email sx={{ color: '#fff' }} />
              <Typography sx={{ color: '#DFE3E8', fontSize: '16px' }}>
                info@tokorumahan.com
              </Typography>
            </Stack>
          </Stack>

          {/* Social */}
          <Stack spacing={2} sx={{ width: '282px' }}>
            <Typography
              sx={{
                color: '#fff',
                fontFamily: 'Open Sauce One',
                fontSize: '18px',
                fontWeight: 600
              }}
            >
              Social
            </Typography>
            <Stack alignItems="center" direction="row" justifyContent="flex-start" spacing={1}>
              {[
                { alt: 'Facebook', href: 'https://facebook.com/yourpage', src: Facebook },
                { alt: 'Instagram', href: 'https://instagram.com/yourpage', src: Instagram },
                { alt: 'LinkedIn', href: 'https://linkedin.com/company/yourpage', src: LinkedIn },
                { alt: 'Twitter', href: 'https://twitter.com/yourpage', src: Twitter }
              ].map((social) => (
                <Link
                  href={social.href}
                  key={social.alt}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Box
                    alt={social.alt}
                    component="img"
                    src={social.src}
                    sx={{
                      backgroundColor: '#fff',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      height: 36,
                      p: '6px',
                      width: 36
                    }} />
                </Link>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

Footer.displayName = 'Footer';
export default Footer;
