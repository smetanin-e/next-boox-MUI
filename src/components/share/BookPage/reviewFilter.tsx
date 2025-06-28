'use client';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

export const ReviewFilter = () => {
  const [select, setSelect] = React.useState('new');

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 120, maxWidth: 300 }} mb={2}>
      <FormControl fullWidth>
        <Select value={select} onChange={handleChange} displayEmpty>
          <MenuItem value={'new'}>Сначала новые</MenuItem>
          <MenuItem value={'old'}>Сначала старые</MenuItem>
          <MenuItem value={'good'}>Сначала с высокой оценкой</MenuItem>
          <MenuItem value={'bad'}>Сначала с низкой оценкой</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
