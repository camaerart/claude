import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import dynamic from 'next/dynamic';

interface Props {
  imageUrl: string;
  content: string;
}

const Carousel = dynamic(() => import('react-multi-carousel'), {
  ssr: false, 
});

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

function CarouselCard({ imageUrl, content }: Props) {
  return (
    <Carousel 
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite={true}
    >
      <Card className=" bg-gray-200 py-40 overflow-hidden shadow-3xl w-full h-full">
        <div className="flex justify-center">
          <Image src={imageUrl} alt={content} width={1200} height={900} className="rounded-2xl object-cover object-center" />
        </div>
        <CardContent className="text-center">
          
          <CardDescription className="mt-2">
               <main>
        <section className="relative">
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl font-bold uppercase hover:text-black shadow-xl text-violet-500  ease-in-out duration-150 ">Example for Claue</h1>
            <h2 className="text-2xl font-semibold mt-2">Flash Sale</h2>
            <Button className="mt-4">Shop Now</Button>
          </div>
          
        </section>
      </main>
          </CardDescription>
        </CardContent>
      </Card>
    </Carousel>
  );
}

export default CarouselCard;