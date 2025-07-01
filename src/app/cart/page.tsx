import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { CartContainer } from '@/styles/cart';
import { CartItem } from '@/components/share/cartItem';
import { CartInfo } from '@/components/share/cartInfo';
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
            <CartItem />
            <CartItem />
            <CartItem />
          </Stack>

          <CartInfo />
        </CartContainer>
      </Container>
    </Box>
  );
}
