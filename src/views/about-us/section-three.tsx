import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import dollar from '@assets/images/about-us/dollar.svg';
import lamp from '@assets/images/about-us/lamp.svg';
import patnership from '@assets/images/about-us/patnership.svg';

const values = [
  {
    description: 'Pengalaman eksklusif dan unik yang memperkuat koneksi antara pelanggan dan restoran pilihan mereka.',
    image: patnership,
    title: 'Unique Connection'
  },
  {
    description: 'Menghadirkan momen baru dengan inovasi berkelanjutan untuk pengalaman kuliner yang mudah dan menyenangkan.',
    image: lamp,
    title: 'Innovative moment'
  },
  {
    description: 'Mendapatkan layanan terbaik dengan harga yang wajar.',
    image: dollar,
    title: 'Assured Quality'
  }
];

const AboutUsSectionThree = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  return (
    <Grid container={true} spacing={4}>
      <Grid
        size={{ md: 12, xs: 12 }}
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          mb: '4rem'
        }}
      >
        <Typography variant="h3">
          <span style={{ color: '#2D3748', fontFamily: "'Playfair Display', serif" }}>Value</span>{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(94.36deg, #F9F295 8.68%, #EDCE6A 33.84%, #D2AC57 62.67%, #B88A44 88.75%)',
              color: 'transparent',
              display: 'inline-block',
              fontFamily: "'Playfair Display', serif",
              WebkitBackgroundClip: 'text'
            }}
          >
            Treats
          </span>
        </Typography>
      </Grid>
      {values.map((item) => {
        return (
          <Grid
            key={item.title}
            size={{ md: 4, xs: 12 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: '5rem'
            }}
          >
            <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
              <Box marginBottom={3} textAlign="center">
                <img alt="logo" src={item.image} />
              </Box>
              <Box marginBottom={2}>
                <Typography
                  sx={{ color: '#2D3748', fontFamily: "'Open Sauce One', serif", fontWeight: 700, textAlign: 'center' }}
                  variant="h5"
                >
                  {item.title}
                </Typography>
              </Box>
              <Box
                alignItems={{ sm: 'flex-start', xs: 'stretched' }}
                display="flex"
                flexDirection={{ sm: 'row', xs: 'column' }}
              >
                <Typography
                  sx={{ color: '#667085', fontFamily: "'Open Sauce One', serif", fontWeight: 400, textAlign: 'center' }}
                  variant="h6"
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

AboutUsSectionThree.displayName = 'AboutUsSectionThree';
export default AboutUsSectionThree;
