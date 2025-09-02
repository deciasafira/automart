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
        height: '490px',
        overflow: 'hidden',
        position: 'relative',
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
          position: 'absolute',
          top: '146px',
          width: '807px'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '645px' }}>
          <Typography
            sx={{
              color: '#333333',
              fontFamily: 'Open Sauce One',
              fontSize: '36px',
              fontWeight: 700,
              lineHeight: '45px'
            }}
          >
            Belanja Sparepart Mobil Tanpa<br /> Ribet, Tanpa Perantara!
          </Typography>
          <Typography
            sx={{
              color: '#606060',
              fontFamily: 'Open Sauce One',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '22px'
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
            height: '47px',
            width: '160px'
          }}
          onClick={() => window.open('https://play.google.com/store', '_blank')} />
      </Box>

      {/* === Mockup HP kanan === */}
      <Box
        alt="Phone Mockup"
        component="img"
        src={phoneMockup}
        sx={{
          boxShadow: 'none',
          height: '757.35px',
          left: '806px',
          position: 'absolute',
          top: '32px',
          transform: 'rotate(-10.81deg)',
          width: '378.67px'
        }} />
    </Box>
  );
};

FrameSix.displayName = 'FrameSix';
export default FrameSix;
