import { ArrowForward } from '@mui/icons-material';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container/Container.js';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import phoneOne from '@assets/images/about-us/phone-1.png';

const AboutUsSectionTwo = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  return (
    <Box
      bgcolor="#F9F2F1"
    >
      <Container>
        <Grid container={true} spacing={4}>
          <Grid
            size={{ md: 6, xs: 12 }}
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
              <Box marginBottom={2}>
                <Typography
                  sx={{ color: '#912210', fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                  variant="h3"
                >
                  Peningkatan Reservasi
                </Typography>
              </Box>
              <Box
                alignItems={{ sm: 'flex-start', xs: 'stretched' }}
                display="flex"
                flexDirection={{ sm: 'row', xs: 'column' }}
              >
                <Typography
                  color="text.secondary"
                  sx={{ fontWeight: 400, textAlign: 'justify' }}
                  variant="h5"
                >
                  TREats membantu meningkatkan reservasi dan efisiensi operasional restoran melalui sistem digital.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            size={{ md: 6, xs: 8 }}
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'end',
              mt: '3rem'
            }}
          >
            <Box
              alt="..."
              component="img"
              loading="lazy"
              maxHeight={480}
              maxWidth={480}
              src={phoneOne} />
          </Grid>
          <Grid
            size={{ md: 6, xs: 8 }}
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'start'
            }}
          >
            <Box
              alt="..."
              component="img"
              loading="lazy"
              maxHeight={480}
              maxWidth={480}
              src={phoneOne} />
          </Grid>
          <Grid
            size={{ md: 6, xs: 12 }}
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
              <Box marginBottom={2}>
                <Typography
                  sx={{ color: '#912210', fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                  variant="h3"
                >
                  Optimalisasi Layanan
                </Typography>
              </Box>
              <Box
                alignItems={{ sm: 'flex-start', xs: 'stretched' }}
                display="flex"
                flexDirection={{ sm: 'row', xs: 'column' }}
              >
                <Typography
                  color="text.secondary"
                  sx={{ fontWeight: 400, textAlign: 'justify' }}
                  variant="h5"
                >
                  TREats menyediakan layanan yang mempermudah pemesanan pelanggan serta membantu restoran mengelola ketersediaan meja dengan lebih efektif.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={12} sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', mb: '3rem', mt: '5rem' }}>
            <Link href="/patnership" sx={{ alignItems: 'center', display: 'flex' }} underline="none">
              <Typography sx={{ color: '#741B0D', fontWeight: 500 }} variant="h4">
                Info Kemitraan
              </Typography>
              <ArrowForward sx={{ color: '#741B0D', fontSize: '2rem' }} />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

AboutUsSectionTwo.displayName = 'AboutUsSectionTwo';
export default AboutUsSectionTwo;
