import React from 'react';

import Box from '@mui/material/Box';

import type { BoxProps } from '@mui/material/Box';

interface Props extends BoxProps {
  readonly children: React.ReactNode
}

const Container = ({ children, ...rest }: Props) => (
  <Box
    margin="0 auto"
    maxWidth={{ md: 1236, sm: 720 }}
    paddingX={2}
    paddingY={{ md: 8, sm: 6, xs: 4 }}
    width={1}
    {...rest}
  >
    {children}
  </Box>
);

Container.displayName = 'Container';
export default Container;
