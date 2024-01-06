
import CarouselCard from "@/components/CarouselCard";
import CarouselPosting from "@/components/CarouselPost";
import CarouselPost from "@/components/CarouselPost";
import LandingHero from "@/components/LandingHero";
import Navbar from "@/components/Navbar";
import Products from "@/components/ProductCardFlip";

export default function Home() {
  return (
    <main className=" h-full w-full">
      <Navbar />
      <div className="mt-20 ml-20 lg:ml-[600px] items-center justify-center">
     <CarouselPosting/>
</div>

    </main>
  )
}