import React from 'react';

import { Box, Typography } from '@mui/material';

import busi from '@assets/images/layoutDefault/busi.svg';
import filterbahanbakar from '@assets/images/layoutDefault/filterbahanbakar.svg';
import filterkabinac from '@assets/images/layoutDefault/filterkabinac.svg';
import filterolli from '@assets/images/layoutDefault/filterolli.svg';
import filterudara from '@assets/images/layoutDefault/filterudara.svg';
import kampasrem from '@assets/images/layoutDefault/kampasrem.svg';
import wiperkaca from '@assets/images/layoutDefault/wiperkaca.svg';

interface Category {
  image: string
  title: string
}

const categories: Category[] = [
  { image: busi, title: 'Busi' },
  { image: filterolli, title: 'Filter Oli' },
  { image: filterudara, title: 'Filter Udara' },
  { image: filterkabinac, title: 'Filter Kabin/AC' },
  { image: kampasrem, title: 'Kampas Rem' },
  { image: wiperkaca, title: 'Wiper Kaca' },
  { image: filterbahanbakar, title: 'Filter Bahan Bakar' }
];

const FrameThree: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        alignItems: 'center',
        bgcolor: '#E2EBF5',
        display: 'flex',
        flexDirection: 'column',
        gap: '80px',
        Height: '665px',
        px: '100px',
        py: '80px',
        width: '100%'
      }}
    >
      {/* === Stack: Heading + Subheading === */}
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          height: '117px',
          maxWidth: '700px',
          textAlign: 'center',
          width: '700px'
        }}
      >
        <Typography
          sx={{
            color: '#1C252E',
            fontFamily: 'Open Sauce One',
            fontSize: { md: '40px', xs: '30px' },
            fontWeight: 700,
            height: '49px',
            lineHeight: '49px',
            width: '700px'
          }}
        >
          Kategori Pilihan
        </Typography>
        <Typography
          sx={{
            color: '#2E2E2E',
            fontFamily: 'Open Sauce One',
            fontSize: { md: '18px', xs: '14px' },
            fontWeight: 400,
            height: { md: '44px', xs: '24px' },
            lineHeight: '22px',
            width: { md: '700px', xs: '350px' }
          }}
        >
          Temukan berbagai sparepart fast moving yang paling banyak dicari bengkel & toko.
          Semua tersedia dengan kualitas terjamin dan harga kompetitif.
        </Typography>
      </Box>

      {/* === Category List <ul> === */}
      <Box
        component="ul"
        sx={{
          '&::-webkit-scrollbar': { display: 'none' },
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          gap: '24px',
          height: '308px',
          listStyle: 'none',
          m: 0,
          overflowX: 'auto',
          p: 0,
          width: '100%'
        }}
      >
        {categories.map((cat, image) => (
          <Box
            component="li"
            key={image}
            sx={{
              alignItems: 'center',
              bgcolor: 'rgba(255, 255, 255, 0.984314)',
              borderRadius: '10px',
              display: 'flex',
              flex: '0 0 auto',
              flexDirection: 'column',
              height: '308px',
              justifyContent: 'center',
              p: '24px 18px',
              width: '236px'
            }}
          >
            <Box
              alt={cat.title}
              component="img"
              src={cat.image}
              sx={{
                borderRadius: '8px',
                height: '200px',
                mb: '24px',
                objectFit: 'contain',
                width: '200px'
              }} />
            <Typography
              sx={{
                color: '#1C252E',
                fontFamily: 'Open Sauce One',
                fontSize: '24px',
                fontWeight: 700,
                height: '30px',
                lineHeight: '30px',
                textAlign: 'center',
                width: '200px'
              }}
            >
              {cat.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

FrameThree.displayName = 'FrameThree';
export default FrameThree;
