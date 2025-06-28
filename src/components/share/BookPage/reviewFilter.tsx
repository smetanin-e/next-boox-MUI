'use client';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

export const ReviewFilter = () => {
  const [select, setSelect] = React.useState('new');

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 120, maxWidth: 300 }} mb={2}>
      <FormControl variant='outlined' fullWidth>
        <InputLabel id='review-select-label'>Сортировать по</InputLabel>
        <Select
          labelId='review-select-label'
          id='review-select'
          value={select}
          label='reviews'
          onChange={handleChange}
        >
          <MenuItem value={'new'}>Сначала новые</MenuItem>
          <MenuItem value={'old'}>Сначала старые</MenuItem>
          <MenuItem value={'good'}>Сначала с высокой оценкой</MenuItem>
          <MenuItem value={'bad'}>Сначала с низкой оценкой</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
