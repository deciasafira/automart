import type { FC } from 'react';
import { useState } from 'react';

import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Box, Container, IconButton } from '@mui/material';

// Import { BannerSlidderItem } from '@pages/home';

// import img1 from '@assets/images/home/carousel1.svg';

/*
 * Const images = [
 *   img1,
 *   "https://dummyimage.com/800x450/000/fff",
 *   "https://picsum.photos/800/450",
 * ];
 */

interface Props {
  readonly images: string[]
}

const Carousel: FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        mb: 4,
        overflowX: 'hidden'
      }}
    >
      <Box
        sx={{
          mx: 'auto',
          overflowX: 'hidden',
          position: 'relative',
          width: '100%'
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            width: '100%'
          }}
        >
          {/* Image Container */}
          <Box
            sx={{
              alignItems: 'center',
              borderRadius: '1rem',
              display: 'flex',
              justifyContent: 'center',
              // Height: { xs: 300, md: 400, lg: 500 },
              minHeight: { lg: 500, md: 400, xs: 300 },
              overflow: 'hidden',
              width: '100%'
            }}
          >
            <Box
              alt={`Slide ${currentIndex + 1}`}
              component="img"
              src={images[currentIndex]}
              sx={{
                height: '100%',
                objectFit: 'cover',
                width: '100%'
              }} />
          </Box>

          {/* Prev Button */}
          <IconButton
            sx={{
              '&:hover': {
                background:
                  'linear-gradient(135deg, rgba(158, 66, 51, 0.4) 0%, rgba(131, 31, 14, 0.4) 100%)'
              },
              background:
                'linear-gradient(135deg, rgba(158, 66, 51, 0.2) 0%, rgba(131, 31, 14, 0.2) 100%)',
              left: 16,
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10
            }}
            onClick={prevSlide}
          >
            <ChevronLeft
              sx={{
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
                background: 'linear-gradient(135deg, #9E4233 0%, #831F0E 100%)'
              }} />
          </IconButton>

          {/* Next Button */}
          <IconButton
            sx={{
              '&:hover': {
                background:
                  'linear-gradient(135deg, rgba(158, 66, 51, 0.4) 0%, rgba(131, 31, 14, 0.4) 100%)'
              },
              background:
                'linear-gradient(135deg, rgba(158, 66, 51, 0.2) 0%, rgba(131, 31, 14, 0.2) 100%)',
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10
            }}
            onClick={nextSlide}
          >
            <ChevronRight
              sx={{
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
                background: 'linear-gradient(135deg, #9E4233 0%, #831F0E 100%)'
              }} />
          </IconButton>
        </Box>

        {/* Indicator Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          {images.map((_, index) => (
            <IconButton
              key={index}
              sx={{
                '&:hover': {
                  bgcolor: currentIndex === index ? '#6D1A0C' : 'transparent'
                },
                bgcolor: currentIndex === index ? '#6D1A0C' : 'transparent',
                border: '2px solid #6D1A0C',
                borderRadius: '50%',
                height: 12,
                mx: 0.5,
                width: 12
              }}
              onClick={() => setCurrentIndex(index)} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

Carousel.displayName = 'Carousel';
export default Carousel;
