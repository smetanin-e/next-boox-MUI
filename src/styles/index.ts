'use client'

import { Box, styled } from "@mui/material";

export const StyledImageContainer = styled(Box)({
    display:"flex", 
    justifyContent:"center",
    flexShrink:0 
});
export const StyledImage = styled('img')({

  width: '100%',
  objectFit: 'cover', 
});