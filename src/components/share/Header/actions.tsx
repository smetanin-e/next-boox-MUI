'use client';

import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { Badge, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ActionsContainer, ActionsTypography, StyledIconButton } from '@/styles/header';
import { useUIContext } from '@/context/ui';

export const Actions = () => {
  const { setDrawerOpen } = useUIContext();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  const iconSize = match ? 'medium' : 'large';
  return (
    <ActionsContainer
      direction='row'
      spacing={2}
      pt={1}

      //   bgcolor='#cecece'
      //   position='fixed'
      //   bottom={0}
      //   width={'100%'}
      //   justifyContent='space-between'
      //   zIndex={20}
    >
      {match && (
        <>
          <StyledIconButton aria-label='home'>
            <Badge color='primary'>
              <HomeIcon color='action' fontSize={iconSize} />
            </Badge>
          </StyledIconButton>
          <StyledIconButton aria-label='menu'>
            <Badge color='primary'>
              <MenuIcon color='action' fontSize={iconSize} onClick={() => setDrawerOpen(true)} />
            </Badge>
          </StyledIconButton>
        </>
      )}

      <StyledIconButton aria-label='cart'>
        <Badge badgeContent={29} color='primary'>
          <ShoppingCartIcon color='action' fontSize={iconSize} />
        </Badge>
        <ActionsTypography>Корзина</ActionsTypography>
      </StyledIconButton>
      <StyledIconButton aria-label='favorite'>
        <Badge badgeContent={1} color='primary'>
          <FavoriteIcon color='action' fontSize={iconSize} />
        </Badge>
        <ActionsTypography>Избранное</ActionsTypography>
      </StyledIconButton>
      <StyledIconButton aria-label='prifile'>
        <AccountCircleIcon color='action' fontSize={iconSize} />

        <ActionsTypography>Профиль</ActionsTypography>
      </StyledIconButton>
    </ActionsContainer>
  );
};
