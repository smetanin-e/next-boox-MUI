import { StyledImage, StyledImageContainer } from '@/styles/bookPage';
import { Paper } from '@mui/material';
import React from 'react';

export const BookImage = () => {
  return (
    <Paper elevation={3} sx={{ overflow: 'hidden', minWidth: '260px' }}>
      <StyledImageContainer>
        <StyledImage
          src='https://ndc.book24.ru/resize/820x1180/pim/products/images/7a/98/01962398-024f-711d-a437-4859db607a98.jpg'
          alt='image'
        />
      </StyledImageContainer>
    </Paper>
  );
};
