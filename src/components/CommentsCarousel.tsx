import { Carousel } from '@mantine/carousel';
import React from 'react';

export function CommentsCarousel({ commentsData }: { commentsData: { comment: string }[] }) {
  const slides = commentsData.map((comment) => (
    <Carousel.Slide key={comment.comment}>{comment.comment}</Carousel.Slide>
  ));

  return (
    <Carousel
      key="stable-carousel"
      slideSize="100%"
      slideGap="xl"
      align="center"
      slidesToScroll={1}
      loop
      withIndicators
    >
      {slides}
    </Carousel>
  );
}
