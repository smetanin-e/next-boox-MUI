'use client';
import { Box, Tabs, Tab, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';

import React from 'react';
import { BookCard } from '../BookCard';
import { Products } from '../Products';

export const TabsPage = () => {
  const tabLinks = ['Бестселлеры', 'Новинки', 'Подержанные ', 'Спец. предложение'];
  const [alignment, setAlignment] = React.useState('Бестселлеры');

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };
  //   const [value, setValue] = React.useState(tabLinks[0]);

  //   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //     setValue(newValue);
  //   };

  return (
    <Box sx={{ width: '100%' }}>
      {/* <Tabs
        value={value}
        onChange={handleChange}
        aria-label='tabs'
        variant='scrollable'
        scrollButtons='auto'
      >
        {tabLinks.map((tab, idx) => (
          <Tab key={tab + idx} value={tab} label={tab} />
        ))}

      </Tabs> */}
      <Box sx={{ width: '600px', overflow: 'auto' }}>
        <ToggleButtonGroup
          color='primary'
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label='tab'
        >
          {tabLinks.map((tab, idx) => (
            <ToggleButton key={idx} value={tab}>
              {tab}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

      <Box>
        <Products alignment={alignment} />
      </Box>
    </Box>
  );
};
