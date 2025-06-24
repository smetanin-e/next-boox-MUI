'use client';
import { Box, Paper, Stack, styled, Typography, IconButton } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Swiper as SwiperClass } from 'swiper';

import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const Overlay = styled(Box)(() => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: 1,
}));

const ContentBox = styled(Stack)(() => ({
  //   minHeight: '100%',
  padding: '50px 90px',
  position: 'relative',
  zIndex: 2, // Устанавливаем zIndex больше, чем у наложенного элемента
  // Здесь можно добавить дополнительные стили для содержимого
}));

export const Slider: React.FC = () => {
  const swiperRef = React.useRef<SwiperClass | null>(null);
  return (
    <Box mb={4}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{
          nextEl: '.next',
          prevEl: '.prev',
        }}
        // pagination={{
        //   clickable: true,
        // }}
        slidesPerView={1}
        loop={true}
        autoHeight
        onInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <Paper elevation={2}>
            <Box
              sx={{
                minHeight: '350px',
                width: '100%',
                backgroundImage: `url(https://cdn.culture.ru/images/8fa573e2-79f4-5cb6-ba55-67a97d1febfd)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
              }}
            >
              <Overlay />
              <ContentBox>
                <Typography
                  variant='h6'
                  component='h1'
                  sx={{
                    color: '#ffffff',
                  }}
                >
                  title
                </Typography>
              </ContentBox>
            </Box>
          </Paper>
        </SwiperSlide>

        <SwiperSlide>
          <Paper elevation={2}>
            <Box
              sx={{
                minHeight: '350px',
                width: '100%',
                backgroundImage: `url(https://avatars.mds.yandex.net/get-altay/1547687/2a0000016b26cff11b719c38fdc233909ca3/XXL_height)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
              }}
            >
              <Overlay />
              <ContentBox>
                <Typography
                  variant='h6'
                  component='h1'
                  sx={{
                    color: '#ffffff',
                  }}
                >
                  title
                </Typography>
              </ContentBox>
            </Box>
          </Paper>
        </SwiperSlide>
        <IconButton
          sx={{
            color: '#ffffff',
            position: 'absolute',
            top: '50%',
            left: '15px',
            translate: '0 -50%',
            zIndex: 2,
          }}
          onClick={() => swiperRef.current?.slidePrev()}
          className='prev'
        >
          <ArrowCircleLeftOutlinedIcon fontSize='large' />
        </IconButton>
        <IconButton
          sx={{
            color: '#ffffff',
            position: 'absolute',
            top: '50%',
            right: '15px',
            translate: '0 -50%',
            zIndex: 2,
          }}
          onClick={() => swiperRef.current?.slidePrev()}
          className='next'
        >
          <ArrowCircleRightOutlinedIcon fontSize='large' />
        </IconButton>
      </Swiper>
    </Box>
  );
};
