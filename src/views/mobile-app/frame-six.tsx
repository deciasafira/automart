import React from 'react';

import { Box, Typography } from '@mui/material';

import phoneMockup from '@assets/images/Mobile.svg';
import playstore from '@assets/images/PlayStoreButtons2.svg';
import backgroundframesix from '@assets/images/layoutDefault/backgroundframesix.jpg';

const FrameSix: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        background: `linear-gradient(178.94deg, #F8F8FB 0.9%, rgba(255,255,255,0) 16.03%),
                     linear-gradient(264.19deg, #F8F8FB -16.61%, rgba(248,248,251,0.8) 5.07%, rgba(248,248,251,0.7) 19.56%, rgba(248,248,251,0.8) 33.68%, rgba(248,248,251,0.9) 49.97%, rgba(248,248,251,0.95) 68.12%, #F8F8FB 88.48%),
                     url(${backgroundframesix})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        maxWidth: '1440px',
        minHeight: { md: '490px', xs: '600px' },
        overflow: 'hidden',
        position: 'relative',
        px: { md: 8, xs: 2 },
        width: '100%'
      }}
    >
      {/* === Content kiri === */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          left: '80px',
          maxWidth: '807px',
          position: 'absolute',
          top: { md: '146px', xs: '100px' },
          width: '100%'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', width: { md: '645px', xs: '100%' } }}>
          <Typography
            sx={{
              color: '#333333',
              fontFamily: 'Open Sauce One',
              fontSize: { md: '36px', xs: '18px' },
              fontWeight: 700,
              lineHeight: { md: '45px', xs: '32px' }
            }}
          >
            Belanja Sparepart Mobil Tanpa<br /> Ribet, Tanpa Perantara!
          </Typography>
          <Typography
            sx={{
              color: '#606060',
              fontFamily: 'Open Sauce One',
              fontSize: { md: '18px', xs: '10px' },
              fontWeight: 400,
              lineHeight: { md: '22px', xs: '20px' }
            }}
          >
            Download aplikasi Automart
          </Typography>
        </Box>

        {/* Tombol Google Play */}
        <Box
          alt="Google Play"
          component="img"
          src={playstore}
          sx={{
            '&:active': { transform: 'scale(0.95)' },
            '&:hover': { transform: 'scale(1.05)' },
            cursor: 'pointer',
            height: { md: '47.48px', xs: '40px' },
            width: { md: '160px', xs: '100px' }
          }}
          onClick={() => window.open('https://play.google.com/store', '_blank')} />
      </Box>

      {/* === Mockup HP kanan === */}
      <Box
        alt="Phone Mockup"
        component="img"
        src={phoneMockup}
        sx={{
          height: { md: '757.35', xs: 'auto' },
          left: { md: '730px', xs: '50px' },
          maxWidth: { md: '550px', xs: '350px' },
          mt: { md: 0, xs: 4 },
          objectFit: 'contain',
          position: { md: 'absolute', xs: 'relative' },
          top: { md: '55px', xs: '287px' },
          transform: { md: 'rotate(-1.81deg)', xs: 'none' },
          width: '100%'
        }} />
    </Box>
  );
};

FrameSix.displayName = 'FrameSix';
export default FrameSix;
