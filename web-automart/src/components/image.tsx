import React from 'react';

import Box from '@mui/material/Box';

import type { BoxProps } from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';

interface ImageProps extends BoxProps {
  readonly alt?: string
  readonly imageProps?: React.ImgHTMLAttributes<HTMLImageElement>
  readonly src: string
  readonly sx?: SxProps<Theme>
}

const emptyObject = {};
const Image: React.FC<ImageProps> = ({
  src,
  imageProps = emptyObject,
  alt = '',
  sx = emptyObject,
  ...rest
}) => {
  return (
    <Box
      className="image"
      sx={sx}
      {...rest}
    >
      <img
        alt={alt}
        height="100%"
        loading="lazy"
        src={src}
        width="100%"
        {...imageProps} />
    </Box>
  );
};

Image.displayName = 'Image';
export default Image;
