"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type SectionProps = {
 title: string
 category: string
 description: string
 image: string
 price: string
}

const containerVariants = {
 hidden: {
  opacity: 0,
  y: 20
 },
 visible: {
  opacity: 1,
  y: 0,
  transition: {
   duration: 1,
   ease: "easeInOut"
  }
 }
}

export default function Section({ title, category, description, image, price }: SectionProps) {
 return (
  <motion.section
   initial="hidden"
   animate="visible"
   variants={containerVariants}
   className="grid lg:grid-cols-2 items-center justify-center gap-8 max-w-6xl mx-auto px-4 pt-10"
  >
   <Image
    src={image}
    alt={title}
    width={600}
    height={250}
    className="rounded-xl aspect-video"
   />
   <div className="flex flex-col max-w-[600px]">
    <h5 className="uppercase text-[#76c7cd] mb-2">{category}</h5>
    <h3 className="text-3xl text-slate-50 font-medium mb-2">{title}</h3>
    <p className="mb-2">{description}</p>
    <h4 className="text-xl text-slate-400 font-normal mb-4">{price}</h4>
    <a
     href="https://lil-baghdad.square.site/s/order?location=11ecbc4e2927f6a69d9aac1f6bbbcc9c&customer_seat_id=11ef0e78f85e40fa879a7a73c86d77ee#most-popular"
     target="_blank"
     rel="noreferrer"
     className="btn btn-outline rounded-full hover:bg-slate-500 duration-100"
    >
     Order Online
    </a>
   </div>
  </motion.section>
 )
}