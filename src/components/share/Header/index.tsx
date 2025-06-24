'use client';
import React from 'react';
import logo from '../../../Assets/images/logo.png';
import { AppBar, Box, Container, useMediaQuery, useTheme } from '@mui/material';

import { HeaderContainer, HeaderLogo } from '@/styles/header';
import { HeaderSearch } from './HeaderSearch';
import { Actions } from './actions';
import { HeaderNav } from './headerNav';

interface Props {
  className?: string;
}
//xs-0 sm-600 md-900 lg-1200 xl-1536
export const Header: React.FC<Props> = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));
  const spacing = match ? 4 : 1;
  return (
    <>
      <AppBar
        sx={{ paddingBlock: '8px', mb: 1, zIndex: '20', width: '100%' }}
        color='inherit'
        position='fixed'
      >
        <Container>
          <HeaderContainer direction='row' spacing={spacing}>
            <Box>
              <HeaderLogo alt='logo' src={logo.src} />
            </Box>
            <HeaderSearch />
            {match && <Actions />}
          </HeaderContainer>

          <HeaderNav />
        </Container>
      </AppBar>
    </>
  );
};
