import React from 'react';

import Box from '@mui/material/Box';

import type { BoxProps } from '@mui/material/Box';

interface Props extends BoxProps {
  readonly children: React.ReactNode
}

const Container = ({ children, ...rest }: Props) => (
  <Box
    display="flex"
    flexDirection="column"
    gap={4}
    height={640}
    margin="0 auto"
    maxWidth={1216}
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
