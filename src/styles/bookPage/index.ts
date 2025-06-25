'use client'
import { Box, styled } from "@mui/material";

export const StyledImageContainer = styled(Box)({
    display:"flex", 
    justifyContent:"center", 
    alignItems:"center", 
});
export const StyledImage = styled('img')({
  width: '410px',  
  height: '590px', 
  objectFit: 'cover', 
});