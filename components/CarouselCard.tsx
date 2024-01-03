import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

interface Props {
  imageUrl: string;
  content: string;
}

function Carouselcard({ imageUrl, content }: Props) {
  return (
    <Card className=" bg-gray-200 px-2 overflow-hidden shadow-3xl">
      <div className="flex justify-center">
        <Image src={imageUrl} alt={content} width={300} height={200} className="rounded-2xl object-cover object-center" />
      </div>
      <CardContent className="text-center">
        
        <CardDescription className="mt-2">
          <Link href="/tienda">
            <Button variant="outline" className="text-xm lg-text-2xl rounded-xl border border-yellow-400 bg-gradient-to-b from-white-to-gray-200 px-7 py-3 text-black shadow-md transition duration-300 ease-in-out hover:bg-yellow-200 hover:text-black">
              comprar
            </Button>
          </Link>
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default Carouselcard;
