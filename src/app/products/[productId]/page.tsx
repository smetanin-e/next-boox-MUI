import { Box, Breadcrumbs, Container, Paper, Stack, Typography } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from 'next/link';
import { BookGridContainer, StyledAboutContainer } from '@/styles/bookPage';

import { PriceInfo } from '@/components/share/BookPage/priceInfo';
import { BookImage } from '@/components/share/BookPage/bookImage';
import { BookAbout } from '@/components/share/BookPage/bookAbout';
import { ReadMore } from '@/components/share/BookPage/readMore';
import { BookCharacteristics } from '@/components/share/BookPage/bookCharacteristics';

import { RatingSummary } from '@/components/share/BookPage/ratingSummary';
import { BookReviews } from '@/components/share/BookPage/bookReviews';
import { BookRating } from '@/components/share/BookPage/bookRating';
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
        <Typography variant='h5' component='h1' paddingBlockEnd={2}>
          Поднятие уровня в одиночку. Книга 8 (Solo Leveling). Новелла
        </Typography>
        <RatingSummary />

        {/*  */}
        <BookGridContainer>
          <Box
            sx={{
              gridColumn: 'span 1',
              gridRow: 'span 2',
              display: 'flex',
              justifyContent: 'center',
              order: 1,
            }}
          >
            <BookImage />
          </Box>

          <Box sx={{ gridColumn: 'span 2', gridRow: 'span 1', order: 2 }}>
            <Paper elevation={3} sx={{ position: 'relative', p: 2 }}>
              <StyledAboutContainer>
                <BookAbout />
              </StyledAboutContainer>

              <ReadMore />
            </Paper>
          </Box>

          <Box
            sx={{
              gridColumn: 'span 2',
              gridRow: 'span 1',
              order: 4,
            }}
          >
            <Paper elevation={3} sx={{ position: 'relative', p: 2 }}>
              <StyledAboutContainer>
                <BookCharacteristics />
              </StyledAboutContainer>
              <ReadMore />
            </Paper>
          </Box>

          <Box sx={{ gridColumn: 'span 1', gridRow: 'span 1', order: 3 }}>
            <PriceInfo />
          </Box>

          <Box sx={{ gridColumn: 'span 1', gridRow: 'span 1', order: 5 }}>
            <BookRating />
          </Box>
        </BookGridContainer>

        <BookReviews />
        <BookAbout />
        <BookCharacteristics />
      </Container>
    </>
  );
}
