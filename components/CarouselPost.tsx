"use client"

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button } from './ui/button';
import Carouselcard from './CarouselCard';
import dynamic from 'next/dynamic';
interface Props {
  imageUrl: string;
  content: string; 
}

export default function CarouselPosting() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000,
        min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const CarouselcardData = [
    {
      id: 1,
      imageurl: "/image1.jpg",
      content: "girl"

    },




  ]
  interface Props {
  imageUrl: string;
    title: string;

  }
  const Carousel = dynamic(() => import('react-multi-carousel'), {
  ssr: false, 
});

const customButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group">
      <Button onClick={() => previous()}>{'<'}</Button>
      <Button onClick={() => goToSlide(currentSlide + 1)}></Button>
    </div>
  );
};

  return (
    <div>
      <Carousel
        responsive={responsive}
        centerMode={false}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
        containerClass="container"
        

        renderButtonGroupOutside={true}
        showDots={true}
        ssr={true}
        

        beforeChange={(nextSlide, { currentSlide }) => {

        }}
        afterChange={(previousSlide, { currentSlide }) => {

        }}
      >
        {CarouselcardData.map(item => (
          <Carouselcard  key={item.id} imageUrl={item.imageurl} content={item.content}  />
        ))}
      </Carousel>
    </div>
  );
}


