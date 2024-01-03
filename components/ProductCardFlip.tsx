"use client"

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProductCardFlip'

import React from 'react'

 const Projects = [
  {
    title: "Social Scribe",
    text: "una web de automatización de creación de contenido con IA",
    src: "/socialscribe.png",
    link:"https://www.socialscribeai.com",
  },
  {
    title: "ilvenezzia store",
    text: "una tienda virtual con asistente IA  integrado",
    src: "/ilvenezzia.png",
    link:"https://www.ilvenezzia.com",
  },
  {
    title: "tienda virtual hevi",
    text: "hevi ofrece personalización de prendas bordadas, usa asistente con IA",
    src: "hevi.png",
    link:"https://hevistore.vercel.app",
  },

];

const Products = () => {
  return (
    <motion.div 
      className='z-20 w-screen h-screen flex flex-col items-center justify-center bg-center bg-cover'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className='text-4xl font-extrabold mb-20 text-white'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Some of our hottest products
      </motion.h1>
      <motion.div 
        className='grid md:grid-cols-2 grid-cols-1 gap-10 max-w-[90%] max-h-[90%] p-1 pr-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {Projects.map((project, index) => (
          <ProjectCard
                key={index}
                //@ts-ignore
              title={project.title}
              text={project.text}
                image={project.src}
                link={project.link}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Products