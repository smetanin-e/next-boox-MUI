import { StyledImage, StyledImageContainer } from '@/styles/bookPage';
import { Box, Button, Container, IconButton, Paper, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { CartContainer } from '@/styles/cart';
export default function Blog() {
  //xs-0 sm-600 md-900 lg-1200 xl-1536
  return (
    <Box>
      <Container>
        <Stack mb={3} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant='h4'>Корзина</Typography>
          <Button variant='text'>Очистить</Button>
        </Stack>
        <CartContainer>
          <Stack spacing={3} flexGrow={1}>
            <Stack
              direction={'row'}
              alignItems={'center'}
              spacing={1}
              justifyContent={'space-between'}
            >
              <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <StyledImageContainer>
                  <StyledImage
                    height={120}
                    src='https://content.img-gorod.ru/pim/products/images/8d/14/0196ae94-8845-735f-ba96-5fe38c328d14.jpg?width=608&height=867&fit=bounds'
                    alt='image'
                  />
                </StyledImageContainer>

                <Stack spacing={2}>
                  <Typography>Эли и Гастон. Дух осени</Typography>
                  <Typography color='textSecondary'>Людовик Виллен, Селин Дереньокур</Typography>
                </Stack>
              </Stack>

              <Stack direction={'row'} alignItems={'center'} spacing={4}>
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <IconButton size='small' sx={{ background: '#f3f3f3' }}>
                    <AddIcon />
                  </IconButton>
                  <Typography textAlign={'center'} width={20} variant='body1'>
                    12
                  </Typography>

                  <IconButton size='small' sx={{ background: '#f3f3f3' }}>
                    <RemoveIcon />
                  </IconButton>
                </Stack>

                <Stack alignItems={'center'} direction={'row'} spacing={2}>
                  <Box>
                    <Typography textAlign={'center'}>6150 ₽</Typography>
                    <Typography textAlign={'center'} variant='body2' color='textSecondary'>
                      20 шт. по 6150 ₽
                    </Typography>
                  </Box>

                  <IconButton size='small'>
                    <DeleteOutlineIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Paper elevation={2} sx={{ flexShrink: 0 }}>
            <Stack spacing={2} p={2}>
              <Typography variant='body2'>
                Товаров - <b>3 шт.</b>
              </Typography>
              <Typography variant='body1'>
                Сумма к оплате: <b>1925 ₽</b>
              </Typography>
              <Button variant='contained' size='small'>
                Перейти к оформлению
              </Button>
            </Stack>
          </Paper>
        </CartContainer>
      </Container>
    </Box>
  );
}
