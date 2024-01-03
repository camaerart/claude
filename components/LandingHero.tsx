import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

function LandingHero() {
   return (
    <div className="max-w-screen-xl mx-auto pt-10 ">
      
      <section className="relative">
        <img
          alt="Best of Collection"
          className="w-full h-auto"
          height="600"
          src="/girl1.jpg"
          style={{
            aspectRatio: "1440/600",
            objectFit: "cover",
          }}
          width="1440"
        />
        <div className=" absolute top-1/2 left-1/4 transform -translate-y-1/2 space-y-4">
          <h2 className="text-3xl font-bold">BEST OF COLLECTION!</h2>
          <p className="max-w-md bg-black bg-opacity-20 rounded-xl text-white font-bold">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            excepteur sint occaecat cupidatat non proident.
          </p>
          <Button className="hover:scale-110">Shop Now</Button>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 bg-gray-500 rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
        </div>
      </section>
      <section className="py-8">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <img
              alt="Women"
              className="w-full h-auto"
              height="465"
              src="/girl2.jpg"
              style={{
                aspectRatio: "330/465",
                objectFit: "cover",
              }}
              width="330"
            />
            <h3 className="mt-2 text-sm font-semibold">Women</h3>
          </div>
          <div>
            <img
              alt="Footwear"
              className="w-full h-auto"
              height="465"
              src="/girl3.jpg"
              style={{
                aspectRatio: "330/465",
                objectFit: "cover",
              }}
              width="330"
            />
            <h3 className="mt-2 text-sm font-semibold">Footwear</h3>
          </div>
          <div>
            <img
              alt="Watches"
              className="w-full h-auto"
              height="465"
              src="/girl3.jpg"
              style={{
                aspectRatio: "330/465",
                objectFit: "cover",
              }}
              width="330"
            />
            <h3 className="mt-2 text-sm font-semibold">Watches</h3>
          </div>
          <div>
            <img
              alt="Accessories"
              className="w-full h-auto"
              height="465"
              src="/girl2.jpg"
              style={{
                aspectRatio: "330/465",
                objectFit: "cover",
              }}
              width="330"
            />
            <h3 className="mt-2 text-sm font-semibold">Accessories</h3>
          </div>
        </div>
      </section>
      <section className="py-8">
        <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2 mb-4">TRENDING</h2>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <img
              alt="Cotton Bohemian"
              className="w-full h-auto"
              height="330"
              src="/girl3.jpg"
              style={{
                aspectRatio: "330/330",
                objectFit: "cover",
              }}
              width="330"
            />
            <h3 className="mt-2 text-sm font-semibold">Cotton Bohemian</h3>
            <p className="text-sm">$35.00</p>
          </div>
          <div>
            <img
              alt="Cotton Blue Denim Sweatpants"
              className="w-full h-auto"
              height="330"
              src="/girl3.jpg"
              style={{
                aspectRatio: "330/330",
                objectFit: "cover",
              }}
              width="330"
            />
            <h3 className="mt-2 text-sm font-semibold">Cotton Blue Denim Sweatpants</h3>
            <p className="text-sm">$45.00</p>
          </div>
          <div>
            <img
              alt="Cuffed Beanie"
              className="w-full h-auto"
              height="330"
              src="/girl3.jpg"
              style={{
                aspectRatio: "330/330",
                objectFit: "cover",
              }}
              width="330"
            />
            <h3 className="mt-2 text-sm font-semibold">Cuffed Beanie</h3>
            <p className="text-sm">$18.00</p>
          </div>
          <div>
            <img
              alt="Short Sleeved Hoodie With Logo"
              className="w-full h-auto"
              height="330"
              src="/girl3.jpg"
              style={{
                aspectRatio: "330/330",
                objectFit: "cover",
              }}
              width="330"
            />
            <h3 className="mt-2 text-sm font-semibold">Short Sleeved Hoodie With Logo</h3>
            <p className="text-sm">$39.00</p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-4 py-8">
        <div>
          <img
            alt="Lookbook 2018"
            className="w-full h-auto"
            height="330"
            src="/girl3.jpg"
            style={{
              aspectRatio: "690/330",
              objectFit: "cover",
            }}
            width="690"
          />
          <h3 className="mt-2 text-sm font-semibold">LOOKBOOK 2018</h3>
          <p className="text-sm">Exclusive Collection</p>
        </div>
        <div>
          <img
            alt="Summer Sale"
            className="w-full h-auto"
            height="330"
            src="/girl3.jpg"
            style={{
              aspectRatio: "690/330",
              objectFit: "cover",
            }}
            width="690"
          />
          <h3 className="mt-2 text-sm font-semibold">SUMMER SALE</h3>
          <p className="text-sm">UP TO 70%</p>
        </div>
      </section>
      <footer className="py-4 text-center">
        <p className="text-sm">© 2023 clauē. All rights reserved.</p>
      </footer>
    </div>
  )
}

function SearchIcon(props:React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShoppingCartIcon(props:React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UserIcon(props:React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export default LandingHero