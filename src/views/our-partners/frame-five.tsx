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
        gap: '80px',
        height: '561px',
        overflow: 'hidden',
        pb: '120px',
        pt: '80px',
        px: '144px',
        width: '1440px'
      }}
    >
      {/* === Heading === */}
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          height: '49px',
          textAlign: 'center',
          width: '700px'
        }}
      >
        <Typography
          sx={{
            color: '#1C252E',
            fontFamily: 'Open Sauce One',
            fontSize: '40px',
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
          gap: '32px',
          height: '232px',
          justifyContent: 'center',
          width: '1152px'
        }}
      >
        {mitras.map((partner) => (
        <Box
          alt={`Logo Mitra ${partner.name}`}
          component="img"
          key={partner.name}
          src={partner.logo}
          sx={{
            maxHeight: '100px',
            maxWidth: '200px',
            objectFit: 'contain'
          }} />
        ))}
      </Box>
    </Box>
  );
};

FrameFive.displayName = 'FrameFive';
export default FrameFive;
