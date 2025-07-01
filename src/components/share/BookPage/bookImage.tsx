import { StyledImage, StyledImageContainer } from '@/styles/';
import React from 'react';

type ImageContainerProps = {
  src: string;
  heigth: number;
};

export const ImageContainer = ({ src, heigth }: ImageContainerProps) => {
  return (
    <StyledImageContainer>
      <StyledImage height={heigth} src={src} alt='image' />
    </StyledImageContainer>
  );
};
