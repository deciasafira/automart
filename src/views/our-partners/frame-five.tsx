import React from 'react';

import { Box, Typography } from '@mui/material';

import daihatsu from '@assets/images/layoutDefault/daihatsu.svg';
import denso from '@assets/images/layoutDefault/denso.svg';
import hitachi from '@assets/images/layoutDefault/hitachi.svg';
import honda from '@assets/images/layoutDefault/honda.svg';
import lexus from '@assets/images/layoutDefault/lexus.svg';
import mazda from '@assets/images/layoutDefault/mazda.svg';
import mitsubishi from '@assets/images/layoutDefault/mitsubishi.svg';
import nissan from '@assets/images/layoutDefault/nissan.svg';
import subaru from '@assets/images/layoutDefault/subaru.svg';
import suzuki from '@assets/images/layoutDefault/suzuki.svg';
import toyota from '@assets/images/layoutDefault/toyota.svg';

const mitras = [
  { logo: toyota, name: 'Toyota' },
  { logo: hitachi, name: 'Hitachi' },
  { logo: nissan, name: 'Nissan' },
  { logo: denso, name: 'Denso' },
  { logo: mazda, name: 'Mazda' },
  { logo: daihatsu, name: 'Daihatsu' },
  { logo: suzuki, name: 'Suzuki' },
  { logo: subaru, name: 'Subaru' },
  { logo: honda, name: 'Honda' },
  { logo: mitsubishi, name: 'Mitsubishi' },
  { logo: lexus, name: 'Lexus' }
];

const FrameFive: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        gap: { md: '80px', xs: '40px' },
        height: { md: '561px', xs: 'auto' },
        overflow: 'hidden',
        pb: { md: '120px', xs: '60px' },
        pt: { md: '80px', xs: '40px' },
        px: { md: '144px', xs: '16px' },
        width: '100%'
      }}
    >
      {/* === Heading === */}
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: { md: '24px', xs: '12px' },
          height: { md: '49px', xs: 'auto' },
          textAlign: 'center',
          width: { md: '700px', xs: '100%' }
        }}
      >
        <Typography
          sx={{
            color: '#1C252E',
            fontFamily: 'Open Sauce One',
            fontSize: { md: '40px', sm: '32px', xs: '24px' },
            fontWeight: 700,
            lineHeight: '49px'
          }}
        >
          Mitra Kami
        </Typography>
      </Box>

      {/* === Grid Logo Mitra === */}
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: { md: '32px', xs: '16px' },
          height: { md: '232px', xs: 'auto' },
          justifyContent: 'center',
          width: { md: '1152px', xs: '100%' }
        }}
      >
        {mitras.map((partner) => (
        <Box
          alt={`Logo Mitra ${partner.name}`}
          component="img"
          key={partner.name}
          src={partner.logo}
          sx={{
            maxHeight: { md: '100px', xs: '50' },
            maxWidth: { md: '200px', xs: '100px' },
            objectFit: 'contain'
          }} />
        ))}
      </Box>
    </Box>
  );
};

FrameFive.displayName = 'FrameFive';
export default FrameFive;
