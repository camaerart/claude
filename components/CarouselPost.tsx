import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button } from './ui/button';
import Carouselcard from './CarouselCard';
interface Props {
  imageUrl: string;
  content: string; 
}

export default function CarouselPost() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
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
      imageurl: "/girl1.jpg",
      content: "girl"

    },

    {
      id: 2,
      imageurl: "/girl2.jpg",
      content: "girl2"

    },
    {
      id: 3,
      imageurl: "/girl3.jpg",
      content: "girl3"

    },

    {
      id: 6,
      imageurl: "/girl3.jpg",
      content: "G"

    },
    {
      id: 6,
      imageurl: "/girl3.jpg",
      content: "G"

    },
    {
      id: 7,
      imageurl: "/green2.jpg",
      content: "G"

    },

  ]
  interface Props {
  imageUrl: string;
    title: string;

}

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
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}

        renderButtonGroupOutside={true}
        showDots={true}
        ssr={true}
        

        beforeChange={(nextSlide, { currentSlide }) => {
          // do something before slide changes
        }}
        afterChange={(previousSlide, { currentSlide }) => {
          // do something after slide changes
        }}
      >
        {CarouselcardData.map(item => (
          <Carouselcard  key={item.id} imageUrl={item.imageurl} content={item.content}  />
        ))}
      </Carousel>
    </div>
  );
}


