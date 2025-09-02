import React from 'react';

import { Box, Button, Container, Grid, Typography } from '@mui/material';

import handshakeIcon from '@assets/images/Handshake.svg';
import phoneMockup from '@assets/images/Mobile.svg';

const HeroSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        width: '100%',
        height: '866px',
        bgcolor: '#FFFFFF',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container alignItems="center" spacing={4}>
          {/* LEFT CONTENT */}
          <Grid item md={6} xs={12}>
            <Box sx={{ maxWidth: 648, display: 'flex', flexDirection: 'column', gap: 2 }}>
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
                    borderRadius: 2,
                    textTransform: 'none'
                  }}
                  variant="contained"
                >
                  Belanja Sekarang
                </Button>
                <Button
                  startIcon={
                    <Box
                      component="img"
                      src={handshakeIcon}
                      alt="Handshake"
                      sx={{ width: 24, height: 24 }}
                    />
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
          <Grid item md={6} xs={12} sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src={phoneMockup}
              alt="Phone Mockup"
              sx={{
                width: 'auto',
                maxHeight: '640px',
                objectFit: 'contain',
                mx: 'auto'
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Decoration Layer */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0
        }}
      >
        {/* Background Blur */}
        <Box
          sx={{
            backdropFilter: 'blur(100px)',
            bgcolor: 'rgba(242, 247, 255, 0.7)',
            position: 'absolute',
            top: 'calc(50% - 752px/2 - 64px)',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 1440,
            height: 752
          }}
        />

        {/* Purple Circle */}
        <Box
          sx={{
            position: 'absolute',
            top: -37,
            left: 1087,
            width: 406,
            height: 406,
            borderRadius: '50%',
            bgcolor: '#2054D5',
            opacity: 0.6,
            filter: 'blur(120px)'
          }}
        />

        {/* Turquoise Circle */}
        <Box
          sx={{
            position: 'absolute',
            top: 464,
            left: 829,
            width: 168,
            height: 168,
            borderRadius: '50%',
            bgcolor: '#2044AD',
            opacity: 0.6,
            filter: 'blur(80px)'
          }}
        />

        {/* Left & Right Bands */}
        <Box
          sx={{
            position: 'absolute',
            top: 675.5,
            left: 0,
            width: 420,
            height: 116.52,
            bgcolor: '#2054D5',
            opacity: 0.25,
            transform: 'rotate(-8deg) scaleY(0.52)'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 758.49,
            left: -152,
            width: 420,
            height: 116.52,
            bgcolor: '#2054D5',
            opacity: 0.1,
            transform: 'rotate(-8deg) scaleY(0.52)'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 448,
            left: 988,
            width: 420,
            height: 116.52,
            bgcolor: '#2054D5',
            opacity: 0.1,
            transform: 'rotate(-8deg) scaleY(0.47)'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 508,
            left: 828,
            width: 612,
            height: 140.81,
            bgcolor: '#2054D5',
            opacity: 0.25,
            transform: 'rotate(-8deg) scaleY(0.52)'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 541.49,
            left: 1260,
            width: 420,
            height: 116.52,
            bgcolor: '#2054D5',
            opacity: 0.6,
            transform: 'rotate(-8deg) scaleY(0.53)'
          }}
        />
      </Box>
    </Box>
  );
};

HeroSection.displayName = 'HeroSection';
export default HeroSection;
