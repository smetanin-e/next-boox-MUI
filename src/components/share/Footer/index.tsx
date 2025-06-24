'use client';
import React from 'react';
import { Actions } from '../Header/actions';
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';

export const Footer = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  const responseMargin = match ? 5 : 0;
  return (
    <footer style={{ backgroundColor: 'purple' }}>
      <Container>
        <Box position='relative' mb={responseMargin} sx={{ paddingBlock: '1rem' }}>
          Footer
        </Box>
      </Container>
      {match && <Actions />}
    </footer>
  );
};
