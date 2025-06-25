import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from 'next/link';
import { StyledImage, StyledImageContainer } from '@/styles/bookPage';
import CheckIcon from '@mui/icons-material/Check';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default async function ProductsDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  const breadcrumbs = ['Главная', 'Детские книги', 'Сказки'];
  return (
    <>
      <h1>Details about product {productId}</h1>
      <Container>
        <Stack spacing={2} mb={2}>
          <Breadcrumbs separator={<KeyboardDoubleArrowRightIcon />} aria-label='breadcrumb'>
            {breadcrumbs.map((item) => (
              <Link key={item} color='inherit' href='/'>
                {item}
              </Link>
            ))}
          </Breadcrumbs>
          <Typography variant='body2'>Артикул: 13354812</Typography>
        </Stack>
        <Typography variant='h5' component='h1'>
          Поднятие уровня в одиночку. Книга 8 (Solo Leveling). Новелла
        </Typography>

        <Stack direction='row' alignItems='start'>
          <StyledImageContainer>
            <StyledImage
              src='https://ndc.book24.ru/resize/820x1180/pim/products/images/7a/98/01962398-024f-711d-a437-4859db607a98.jpg'
              alt='image'
            />
          </StyledImageContainer>
          <Box>
            <Typography variant='h5'>О товаре</Typography>
            <Typography variant='body1'>
              - Финальный том новеллы-бестселлера. Завершение серии!
            </Typography>
            <Typography variant='body1'>
              - Первоначально опубликованный на корейском портале KakaoPage в 2016 году, роман
              быстро привлек 2,4 миллиона читателей, а сейчас их число превышает 4 миллиона.
            </Typography>
            <Typography variant='body1'>
              - История переведена на несколько языков, включая английский.
            </Typography>
            <Typography variant='body1'>
              - В 2024 году вышел первый сезон аниме-сериала «Поднятие уровня в одиночку», в 2025
              году — второй. Экранизация вошла в топы аниме 2024 года, включая рейтинг от Polygon, и
              получила премию Astra Award.
            </Typography>
            <Typography variant='h6'>Аннотация</Typography>
            <Typography variant='body1'>
              &quot;ПОЖЕРТВОВАТЬ ОДНИМ, ЧТОБЫ СПАСТИ МНОГИХ…&quot;
            </Typography>
            <Typography variant='body1'>
              Повелитель Разрушения с армией хаоса обрушиваются на Землю, оставляя за собой кровавый
              след из миллионов смертей.
            </Typography>
            <Typography variant='body1'>
              Охотники оказываются бессильны перед натиском врага. Теперь судьба человечества
              находится в руках Сон Чину, недавно коронованного Повелителя Теней.
            </Typography>
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography variant='body2' display='flex' alignItems='center' gap={1}>
                <CheckIcon /> В наличии
              </Typography>
              <Typography variant='body2' sx={{ textDecoration: 'line-through' }}>
                919 ₽
              </Typography>
              <Stack direction='row' spacing={2}>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                  fontSize={22} //18
                  sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  <AccountBalanceWalletIcon /> 720 ₽
                </Typography>
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
              </Stack>
              <Stack direction='row'>
                <Button variant='contained'>Добавить в корзину</Button>
                <IconButton
                  sx={{
                    // position: 'absolute',
                    // right: '8px',
                    // top: '8px',
                    zIndex: 2,
                    bgcolor: '#fff',
                  }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
              </Stack>
            </Paper>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
