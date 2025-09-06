import React from 'react';

import { Box, Button, Container, Grid, Typography } from '@mui/material';

import handshakeIcon from '@assets/images/Handshake.svg';
import phoneMockup from '@assets/images/Phone Mockup.svg';
import LeftBandOne from '@assets/images/layoutDefault/Left Band 1.svg';
import LeftBandTwo from '@assets/images/layoutDefault/Left Band 2.svg';
import RightBandOne from '@assets/images/layoutDefault/Right Band 1.svg';
import RightBandTwo from '@assets/images/layoutDefault/Right Band 2.svg';
import RightBandThree from '@assets/images/layoutDefault/Right Band 3.svg';

const HeroSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#FFFFFF',
        height: { md: '866px', xs: 'auto' },
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        width: '100%'
      }}
    >
      {/* Container */}
      <Container
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column' },
          gap: 32,
          height: { md: 640, xs: '50%' },
          left: { md: 112, xs: '0%' },
          position: { md: 'absolute', xs: 'relative' },
          top: { md: 152, xs: 10 },
          width: { md: 1216, xs: '100%' },
          zIndex: 2
        }}
      >
        <Grid alignItems="center" container={true} spacing={4}>
          {/* LEFT CONTENT */}
          <Grid item={true} md={6} xs={12}>
            <Box
              sx={{
                alignItems: { md: 'flex-start', xs: 'center' },
                display: 'flex',
                flexDirection: 'column',
                gap: { md: 2, xs: 2 },
                justifyContent: 'center',
                maxWidth: 648,
                textAlign: { xs: 'center' }
              }}
            >
              <Typography
                sx={{
                  color: '#2E2E2E',
                  // FontFamily: 'Open Sauce One',
                  fontSize: { md: 56, xs: 28 },
                  fontWeight: 800,
                  lineHeight: { md: '69px', xS: '36px' }
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
                  fontSize: { md: '18px', xS: '14px' },
                  fontWeight: 400,
                  lineHeight: '100%'
                }}
              >
                Automart bantu bengkel dan toko sparepart dapat harga terbaik langsung dari sumbernya. Stok lebih pasti, margin makin untung.
              </Typography>

              {/* CTA Buttons */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  sx={{
                    bgcolor: '#2054D5',
                    fontSize: { md: '16px', xS: '14px' },
                    fontWeight: 600,
                    height: { md: '56', xS: '48px' },
                    px: { md: 3, xS: 2 },
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
                      sx={{ height: { md: 24, xs: 12 }, width: { md: 24, xs: '100%' } }} />
                  }
                  sx={{
                    border: '2px solid #2054D5',
                    borderRadius: 2,
                    color: '#2054D5',
                    fontFamily: 'Inter',
                    fontSize: { md: '16px', xS: '14px' },
                    fontWeight: 600,
                    height: { md: '56px', xS: '30px' },
                    px: { md: 3, xS: 2 },
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
          <Grid item={true} md={6} xs={12}>
            <Box
              sx={{
                alignItems: 'flex-end',
                display: 'flex',
                height: { md: 640, xs: 'auto' },
                left: { xs: 75 },
                mx: 'auto',
                position: 'relative',
                top: { xs: -90 },
                transform: 'translate(-45px, 75px)',
                width: { md: 488, xs: '70%' }
              }}
            >
              <Box
                alt="Phone Mockup"
                component="img"
                src={phoneMockup}
                sx={{
                  height: { md: 640, xs: '50%' },
                  width: { md: 488, xs: '80%' }
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
        alt="Left Band 1"
        component="img"
        src={LeftBandOne}
        sx={{
          height: 116.52,
          left: 0,
          position: 'absolute',
          top: 675.5,
          transform: 'translate(-5px, 0px)',
          width: 420,
          zIndex: 0
        }} />
      <Box
        alt="Left Band 2"
        component="img"
        src={LeftBandTwo}
        sx={{
          height: 116.52,
          left: -152,
          position: 'absolute',
          top: 758.49,
          transform: 'translate(0px, 7px)',
          width: 420,
          zIndex: 0
        }} />

      {/* Right Bands */}
      <Box
        alt="Right Band 1"
        component="img"
        src={RightBandOne}
        sx={{
          height: 116.52,
          left: 988,
          position: 'absolute',
          top: 448,
          transform: 'translate(-170px, 26px)',
          width: 420,
          zIndex: 0
        }} />
      <Box
        alt="Right Band 2"
        component="img"
        src={RightBandTwo}
        sx={{
          height: 140.81,
          left: 828,
          position: 'absolute',
          top: 508,
          transform: 'translate(-110px, 18px)',
          width: 612,
          zIndex: 0
        }} />
      <Box
        alt="Right Band 3"
        component="img"
        src={RightBandThree}
        sx={{
          height: 116.52,
          left: 1260,
          position: 'absolute',
          top: 541.49,
          transform: 'translate(-250px, 20px)',
          width: 420,
          zIndex: 0
        }} />
    </Box>
  );
};

HeroSection.displayName = 'HeroSection';
export default HeroSection;
