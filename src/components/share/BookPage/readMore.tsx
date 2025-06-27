import { Box, Button, Typography } from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import React from 'react';

export const ReadMore = () => {
  return (
    <Box
      sx={{
        cursor: 'pointer',
        zIndex: 3,
        position: 'absolute',
        left: '50%',
        bottom: '10px',
        translate: '-50%',
      }}
    >
      <Button color='info' size='small'>
        Подробнее <ReadMoreIcon />
      </Button>
    </Box>
  );
};
