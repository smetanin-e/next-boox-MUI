import { StyledImage, StyledImageContainer } from '@/styles/bookPage';
import { Paper } from '@mui/material';
import React from 'react';

export const BookImage = () => {
  return (
    <StyledImageContainer>
      <StyledImage
        height={420}
        src='https://content.img-gorod.ru/pim/products/images/8d/14/0196ae94-8845-735f-ba96-5fe38c328d14.jpg?width=608&height=867&fit=bounds'
        alt='image'
      />
    </StyledImageContainer>
  );
};
