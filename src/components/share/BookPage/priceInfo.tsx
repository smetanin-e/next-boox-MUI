import { Box, Button, IconButton, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

import CheckIcon from '@mui/icons-material/Check';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const PriceInfo = () => {
  return (
    <Box sx={{ flexShrink: 0 }}>
      <Paper
        elevation={3}
        sx={{
          paddingInline: 3,
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
        }}
      >
        <Box>
          <Typography
            color='success'
            variant='body2'
            display='flex'
            alignItems='center'
            gap={1}
            paddingBlockEnd={1}
          >
            <CheckIcon /> В наличии
          </Typography>
          <Typography variant='body2' color='textDisabled' sx={{ textDecoration: 'line-through' }}>
            919 ₽
          </Typography>
          <Stack direction='row' spacing={2} alignItems='center' paddingBlockEnd={2}>
            <Typography
              color='secondary'
              variant='body1'
              fontWeight='bold'
              fontSize={22} //18
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <AccountBalanceWalletIcon /> 720 ₽
            </Typography>
            <Box>
              <Stack
                alignItems={'center'}
                justifyContent={'center'}
                bgcolor='#FE6564'
                color='#fff'
                p={'5px 5px'}
                borderRadius={'5px'}
              >
                <Typography fontSize={14} fontWeight={'bold'} lineHeight={1}>
                  -35%
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Stack direction='row' spacing={1} justifyContent='space-between'>
            <Button variant='contained'>Добавить в корзину</Button>
            <IconButton
              sx={{
                zIndex: 2,
                bgcolor: '#fff',
              }}
            >
              <FavoriteBorderIcon />
            </IconButton>
          </Stack>
        </Box>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          paddingInline: 3,
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
        }}
      >
        <Box width={'100%'}>
          <Typography
            color='success'
            variant='body2'
            display='flex'
            alignItems='center'
            gap={1}
            paddingBlockEnd={1}
          >
            <CheckIcon /> В наличии
          </Typography>

          <Stack direction='row' spacing={2} alignItems='center' paddingBlockEnd={2}>
            <Typography
              color='secondary'
              variant='body1'
              fontWeight='bold'
              fontSize={22} //18
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <AccountBalanceWalletIcon /> 720 ₽
            </Typography>
          </Stack>
          <Stack direction='row' spacing={1} justifyContent='space-between'>
            <Button variant='contained' color='success'>
              Оформить
            </Button>
            <IconButton
              sx={{
                zIndex: 2,
                bgcolor: '#fff',
              }}
            >
              <FavoriteIcon color='error' />
            </IconButton>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};
