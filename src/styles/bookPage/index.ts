'use client'
import { Box, styled } from "@mui/material";

export const StyledImageContainer = styled(Box)({
    display:"flex", 
    justifyContent:"center", 
    alignItems:"center", 
});
export const StyledImage = styled('img')({
  width: '100%',  
  height: '416px', 
  objectFit: 'cover', 
});

export const StyledAboutContainer = styled(Box)({
   
  height: '168px', 
  overflow: 'hidden',
  position: 'relative',
    '&::after': {
    content: '""', // Обязательный параметр для псевдоэлемента
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: '90px',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
    bottom: 0,
    left: 0
    }
  
});