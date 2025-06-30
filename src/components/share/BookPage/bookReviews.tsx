import { Box, Typography } from '@mui/material';
import { BookRating } from '@/components/share/BookPage/bookRating';
import React from 'react';
import { Review } from './review';
import { ReviewFilter } from './reviewFilter';

export const BookReviews = () => {
  return (
    <Box mb={4}>
      <Typography variant='h6' paddingBlockEnd={1} textAlign={'right'}>
        Отзывы
      </Typography>

      <ReviewFilter />

      <Review />
      <Review />
      <Review />
      <Review />
    </Box>
  );
};
