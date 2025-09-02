import React from 'react';

import { Box, Card, CardContent, CardMedia, Chip, Container, Grid, Typography } from '@mui/material';

import barangberkualitas from '@assets/images/layoutDefault/barangberkualitas.svg';
import hargaterbaik from '@assets/images/layoutDefault/hargaterbaik.svg';
import kirimcepat from '@assets/images/layoutDefault/kirimcepat.svg';
import pusatsparepart from '@assets/images/layoutDefault/pusatsparepart.svg';

const services = [
  {
    description:
      'Akses ribuan suku cadang terverifikasi dari berbagai distributor terpercaya dalam satu aplikasi',
    image: pusatsparepart,
    title: 'Pusat Sparepart'
  },
  {
    description:
      'Bandingkan harga dari banyak penjual secara transparan untuk memaksimalkan keuntungan bisnis Anda',
    image: hargaterbaik,
    title: 'Harga Terbaik'
  },
  {
    description:
      'Pilih opsi pengiriman instan atau terjadwal yang andal dan lacak pesanan Anda hingga tiba di tujuan',
    image: kirimcepat,
    title: 'Kirim Cepat'
  },
  {
    description:
      'Jaga arus kas bisnis Anda tetap sehat dengan fasilitas pembayaran tempo yang mudah diajukan',
    image: barangberkualitas,
    title: 'Barang Berkualitas'
  }
];

const FrameTwo: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#FFFFFF',
        textAlign: 'center',
        width: '100%'
      }}
    >
      <Container maxWidth="lg">
        <Chip
          label="Layanan Kami"
          sx={{
            bgcolor: '#E6F1FE',
            borderRadius: '50px',
            color: '#2054D5',
            fontSize: 18,
            fontWeight: 500,
            gap: '20px',
            mb: 4,
            px: 3,
            py: 1
          }} />

        <Typography
          sx={{
            color: '#2E2E2E',
            fontSize: '40px',
            fontWeight: 700,
            lineHeight: '100%',
            mb: { md: 10, xs: 6 }
          }}
          variant="h3"
        >
          Berbagai solusi untuk mendukung bisnis<br /> bengkel dan toko sparepart Anda.
        </Typography>

        <Grid container spacing={4}>
          {services.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.title}>
              <Card
                sx={{
                  boxShadow: 'none',
                  gap: 3,
                  height: '100%',
                  textAlign: 'left'
                }}
              >
                <CardMedia
                  alt={item.title}
                  component="img"
                  image={item.image}
                  sx={{
                    borderRadius: 2,
                    height: 260,
                    mb: 3,
                    objectFit: 'cover'
                  }} />
                <CardContent sx={{ px: 0 }}>
                  <Typography
                    sx={{
                      fontSize: 22,
                      fontWeight: 700,
                      mb: 1
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#777',
                      fontSize: 16,
                      lineHeight: 1.5
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

FrameTwo.displayName = 'FrameTwo';
export default FrameTwo;
