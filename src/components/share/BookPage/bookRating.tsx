import { Box, LinearProgress, Paper, Rating, Stack, Typography } from '@mui/material';
import React from 'react';

export const BookRating = () => {
  const totalValue = 105;
  //const filledValue = 30;

  return (
    // <Box sx={{ width: '100%' }}>
    //   <LinearProgress variant='determinate' value={(filledValue / totalValue) * 100} />
    //   <Typography component='legend'>Read only</Typography>
    //   <Rating name='read-only' value={4} readOnly />
    // </Box>

    <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
      <Stack direction='row' spacing={2} alignItems='center' justifyContent='center'>
        <Typography variant='h6'>4.4</Typography>
        <Rating name='read-only' value={4.4} readOnly precision={0.5} />
        <Typography variant='body2'>105 оценок</Typography>
      </Stack>

      <Stack direction='row' spacing={2} alignItems='center'>
        <Rating name='read-only' value={5} readOnly />
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant='determinate' value={(70 / totalValue) * 100} />
        </Box>
        <Typography variant='body1' textAlign='center' sx={{ flexBasis: '40px' }}>
          70
        </Typography>
      </Stack>
      <Stack direction='row' spacing={2} alignItems='center'>
        <Rating name='read-only' value={4} readOnly />
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant='determinate' value={(19 / totalValue) * 100} />
        </Box>
        <Typography variant='body1' textAlign='center' sx={{ flexBasis: '40px' }}>
          19
        </Typography>
      </Stack>
      <Stack direction='row' spacing={2} alignItems='center'>
        <Rating name='read-only' value={3} readOnly />
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant='determinate' value={(11 / totalValue) * 100} />
        </Box>
        <Typography variant='body1' textAlign='center' sx={{ flexBasis: '40px' }}>
          11
        </Typography>
      </Stack>
      <Stack direction='row' spacing={2} alignItems='center'>
        <Rating name='read-only' value={2} readOnly />
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant='determinate' value={(3 / totalValue) * 100} />
        </Box>
        <Typography variant='body1' textAlign='center' sx={{ flexBasis: '40px' }}>
          3
        </Typography>
      </Stack>
      <Stack direction='row' spacing={2} alignItems='center'>
        <Rating name='read-only' value={1} readOnly />
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant='determinate' value={(2 / totalValue) * 100} />
        </Box>
        <Typography variant='body1' textAlign='center' sx={{ flexBasis: '40px' }}>
          2
        </Typography>
      </Stack>
    </Paper>
  );
};
