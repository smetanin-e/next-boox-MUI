import { Box, Breadcrumbs, Container, Paper, Stack, Typography } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from 'next/link';
import { StyledAboutContainer } from '@/styles/bookPage';

import { PriceInfo } from '@/components/share/BookPage/priceInfo';
import { BookImage } from '@/components/share/BookPage/bookImage';
import { BookAbout } from '@/components/share/BookPage/bookAbout';
import { ReadMore } from '@/components/share/BookPage/readMore';
import { BookCharacteristics } from '@/components/share/BookPage/bookCharacteristics';

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
        </Stack>
        <Typography variant='h5' component='h1' paddingBlockEnd={3}>
          Поднятие уровня в одиночку. Книга 8 (Solo Leveling). Новелла
        </Typography>

        <Stack direction='row' alignItems='start' mb={3}>
          <BookImage />

          <Box paddingInline={3}>
            <Paper elevation={3} sx={{ position: 'relative', p: 2, mb: 2 }}>
              <StyledAboutContainer>
                <BookAbout />
              </StyledAboutContainer>

              <ReadMore />
            </Paper>

            <Paper elevation={3} sx={{ position: 'relative', p: 2 }}>
              <StyledAboutContainer>
                <BookCharacteristics />
              </StyledAboutContainer>
              <ReadMore />
            </Paper>
          </Box>
          <PriceInfo />
        </Stack>

        <BookAbout />
        <BookCharacteristics />
      </Container>
    </>
  );
}
