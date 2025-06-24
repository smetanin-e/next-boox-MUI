'use client';
import { Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Catalog } from '../katalog';
import { useUIContext } from '@/context/ui';
import CloseIcon from '@mui/icons-material/Close';
import { HeaderLinks } from '../Header/headerLinks';

export const AppDrawer = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  const { drawerOpen, setDrawerOpen } = useUIContext();
  const anchor = match ? 'top' : 'left';
  return (
    <Drawer anchor={anchor} open={drawerOpen} sx={{ position: 'relative' }}>
      {drawerOpen && (
        <IconButton
          size='large'
          sx={{ position: 'absolute', top: '10px', right: '10px', zIndex: 2 }}
          onClick={() => setDrawerOpen(false)}
        >
          <CloseIcon />
        </IconButton>
      )}

      {match && <HeaderLinks />}

      <Catalog />
    </Drawer>
  );
};
