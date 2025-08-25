import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import treats from '@assets/images/treats-logo.svg';

const AboutUsSectionOne = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  return (
    <Grid container={true} spacing={4}>
      <Grid
        alignItems="center"
        justifyContent="center"
        size={{ md: 6, xs: 8 }}
      >
        <Box
          alt="..."
          borderRadius={2}
          component="img"
          height={1}
          loading="lazy"
          maxHeight={500}
          maxWidth={600}
          src="https://assets.maccarianagency.com/backgrounds/img8.jpg"
          sx={{
            boxShadow: '19px 20px 0px 0 rgb(140 152 164 / 13%)',
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
            objectFit: 'cover'
          }}
          width={1} />
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
              color="text.secondary"
              sx={{ fontWeight: 500 }}
              variant="h5"
            >
              APA ITU TREATS
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <img alt="logo" src={treats} />
          </Box>
          <Box
            alignItems={{ sm: 'flex-start', xs: 'stretched' }}
            display="flex"
            flexDirection={{ sm: 'row', xs: 'column' }}
          >
            <Typography
              sx={{ color: '#667085', fontFamily: "'Open Sauce One', serif", fontWeight: 400, textAlign: 'justify' }}
              variant="h5"
            >
              Treats adalah Platform Online Food Service yang mempermudah pemesanan, mengelola meja, dan meningkatkan operasional restoran secara digital.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

AboutUsSectionOne.displayName = 'AboutUsSectionOne';
export default AboutUsSectionOne;
