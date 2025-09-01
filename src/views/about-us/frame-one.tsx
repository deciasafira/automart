import React from 'react';

import { Box, Typography } from '@mui/material';

import Sparepart from '@assets/images/sparepart.svg';

const FrameOne: React.FC = () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        background: '#2044AD',
        display: 'flex',
        gap: '80px',
        height: '544px',
        justifyContent: 'space-between',
        left: '80px',
        overflow: 'hidden',
        px: '100px',
        width: '1440px'
      }}
    >
      {/* Left Content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '548px' }}>
      <Box
        sx={{
          alignItems: 'center',
          borderRadius: '50px',
          display: 'inline-flex',
          justifyContent: 'center',
          px: '40px',
          py: '8px'
        }}
      >
        <Box
          sx={{
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            height: '317px',
            justifyContent: 'center',
            width: '548px'
          }}
        >
          <Box
            sx={{
              alignItems: 'flex-start',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              height: '317px',
              width: '548px'
            }}
          >
            {/* Tentang Kami Tag */}
            <Box
              sx={{
                alignItems: 'center',
                background: '#FFFFFF7A',
                borderRadius: '50px',
                display: 'flex',
                flexDirection: 'row',
                gap: '8px',
                height: '38px',
                justifyContent: 'center',
                padding: '8px 40px 8px 40px',
                width: '198px'
              }}
            >
              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontFamily: 'Open Sauce One',
                  fontSize: '18px',
                  fontWeight: 500,
                  lineHeight: '100%',
                  textAlign: 'center'
                }}
              >
                Tentang Kami
              </Typography>
            </Box>

            {/* Title */}
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'Open Sauce One',
                fontSize: '40px',
                fontWeight: 700,
                height: '147px',
                lineHeight: '100%',
                style: 'bold',
                textAlign: 'justify',
                width: '548px'
              }}
            >
              Solusi Pengadaan <br /> Sparepart Grosir yang <br /> Lebih Mudah & Terpercaya
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'Open Sauce One',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '22px',
                textAlign: 'justify',
                width: '548px'
              }}
            >
              Dengan jaringan distributor resmi dan terverifikasi, AutoMart <br /> hadir
              sebagai platform digital B2B untuk membantu bengkel <br /> dan toko
              mendapatkan sparepart mobil grosir dengan lebih <br /> cepat, praktis, dan
              transparan.
            </Typography>
          </Box>
        </Box>
      </Box>
      </Box>

      {/* Right Content - Image */}
      <Box
        sx={{
          height: '544px',
          position: 'relative',
          width: '712px'
        }}
      >
        <Box
          alt="Sparepart"
          component="img"
          src={Sparepart}
          sx={{
            height: '544px',
            objectFit: 'center',
            width: '712px'
          }} />
        <Box
          sx={{
            background:
              'linear-gradient(243.37deg, rgba(24, 39, 83, 0) 14.61%, rgba(32, 84, 213, 0.5) 98.53%)',
            height: '544px',
            left: 0,
            position: 'absolute',
            top: 0,
            width: '712px'
          }} />
      </Box>
    </Box>
  );
};

FrameOne.displayName = 'FrameOne';
export default FrameOne;
