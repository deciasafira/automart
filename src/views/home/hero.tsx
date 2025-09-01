import React from 'react';

import { Box, Button, Container, Grid, Typography } from '@mui/material';

import handshakeIcon from '@assets/images/Handshake.svg';
import phoneMockup from '@assets/images/Mobile.svg';

const HeroSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#FFFFFF',
        height: '866px',
        overflow: 'visible',
        position: 'relative',
        width: '1440px'
      }}
    >
      {/* Container */}
      <Container
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'row',
          gap: 32,
          height: 640,
          left: 112,
          position: 'absolute',
          top: 152,
          width: 1216,
          zIndex: 2
        }}
      >
        <Grid container spacing={4}>
          {/* LEFT CONTENT */}
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                alignItems: 'flex-start',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxWidth: 648
              }}
            >
              <Typography
                sx={{
                  color: '#2E2E2E',
                  fontFamily: 'Open Sauce One',
                  fontSize: 56,
                  fontWeight: 800,
                  lineHeight: '69px'
                }}
              >
                Belanja{' '}
                <Box component="span" sx={{ color: '#2054D5' }}>
                  Sparepart Mobil
                </Box>{' '}
                Tanpa Ribet, Tanpa Perantara!
              </Typography>
              <Typography
                sx={{
                  color: '#374151',
                  fontFamily: 'Inter',
                  fontSize: 18,
                  fontWeight: 400,
                  lineHeight: '28px'
                }}
              >
                Automart bantu bengkel dan toko sparepart dapat harga terbaik langsung <br />
                dari sumbernya. Stok lebih pasti, margin makin untung.
              </Typography>

              {/* CTA Buttons */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  sx={{
                    bgcolor: '#2054D5',
                    fontSize: 16,
                    fontWeight: 600,
                    height: 56,
                    px: 3,
                    radius: 8,
                    textTransform: 'none'
                  }}
                  variant="contained"
                >
                  Belanja Sekarang
                </Button>
                <Button
                  startIcon={
                    <Box
                      alt="Handshake"
                      component="img"
                      src={handshakeIcon}
                      sx={{ height: 24, width: 24 }} />
                  }
                  sx={{
                    border: '2px solid #2054D5',
                    borderRadius: 2,
                    color: '#2054D5',
                    fontFamily: 'Inter',
                    fontSize: 16,
                    fontWeight: 600,
                    height: 56,
                    px: 3,
                    textTransform: 'none'
                  }}
                  variant="outlined"
                >
                  Gabung Mitra
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT CONTENT */}
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                height: 640,
                mx: 'auto',
                position: 'relative',
                width: 488
              }}
            >
              <Box
                alt="Phone Mockup"
                component="img"
                src={phoneMockup}
                sx={{
                  boxShadow: 'none',
                  height: 640,
                  left: 84,
                  position: 'absolute',
                  top: 0,
                  width: 488
                }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* Background Blur Layer */}
      <Box
        sx={{
          backdropFilter: 'blur(100px)',
          bgcolor: 'rgba(242, 247, 255, 0.7)',
          height: 752,
          left: 'calc(50% - 1440px/2)',
          position: 'absolute',
          top: 'calc(50% - 752px/2 - 64px)',
          width: 1440,
          zIndex: 0
        }} />

      {/* Purple Circle */}
      <Box
        sx={{
          bgcolor: '#2054D5',
          borderRadius: '50%',
          filter: 'blur(120px)',
          height: 406,
          left: 1087,
          opacity: 0.6,
          position: 'absolute',
          top: -37,
          width: 406,
          zIndex: 0
        }} />

      {/* Turquoise Circle */}
      <Box
        sx={{
          bgcolor: '#2044AD',
          borderRadius: '50%',
          filter: 'blur(80px)',
          height: 168,
          left: 829,
          opacity: 0.6,
          position: 'absolute',
          top: 464,
          width: 168,
          zIndex: 0
        }} />

      {/* Left Bands */}
      <Box
        sx={{
          bgcolor: '#2054D5',
          height: 116.52,
          left: 0,
          opacity: 0.25,
          position: 'absolute',
          top: 675.5,
          transform: 'rotate(-8deg) scaleY(0.52)',
          transformOrigin: 'center',
          width: 420,
          zIndex: 0
        }} />
      <Box
        sx={{
          bgcolor: '#2054D5',
          height: 116.52,
          left: -152,
          opacity: 0.1,
          position: 'absolute',
          top: 758.49,
          transform: 'rotate(-8deg) scaleY(0.52)',
          transformOrigin: 'center',
          width: 420,
          zIndex: 0
        }} />

      {/* Right Bands */}
      <Box
        sx={{
          bgcolor: '#2054D5',
          height: 116.52,
          left: 988,
          opacity: 0.1,
          position: 'absolute',
          top: 448,
          transform: 'rotate(-8deg) scaleY(0.47)',
          transformOrigin: 'center',
          width: 420,
          zIndex: 0
        }} />
      <Box
        sx={{
          bgcolor: '#2054D5',
          height: 140.81,
          left: 828,
          opacity: 0.25,
          position: 'absolute',
          top: 508,
          transform: 'rotate(-8deg) scaleY(0.52)',
          transformOrigin: 'center',
          width: 612,
          zIndex: 0
        }} />
      <Box
        sx={{
          bgcolor: '#2054D5',
          height: 116.52,
          left: 1260,
          opacity: 0.6,
          position: 'absolute',
          top: 541.49,
          transform: 'rotate(-8deg) scaleY(0.53)',
          transformOrigin: 'center',
          width: 420,
          zIndex: 0
        }} />
    </Box>
  );
};

HeroSection.displayName = 'HeroSection';
export default HeroSection;
