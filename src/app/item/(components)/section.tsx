"use client"

import { motion } from "framer-motion"
import { Chevron } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"

type SectionProps = {
 title: string
 category: string
 description: string
 image: string
 price: string
}

const containerVariants = {
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } }
}

export default function Section({ title, category, description, image, price }: SectionProps) {
 return (
  <>
   <nav className="flex items-center justify-start p-4">
    <Link
     href={"/"}
     aria-label="Home"
     className="text-slate-200 rounded-full hover:bg-slate-300 hover:text-slate-700 transition duration-100"
    >
     <Chevron />
    </Link>
   </nav>
   <motion.section
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="grid lg:grid-cols-2 items-center justify-center gap-8 max-w-6xl mx-auto px-4 py-8"
   >
    <Image
     src={image}
     alt={title}
     width={600}
     height={250}
     className="rounded-xl aspect-video"
    />
    <div className="flex flex-col flex-1">
     <h5 className="text-[#76c7cd] uppercase mb-2">{category}</h5>
     <h3 className="text-slate-50 text-3xl font-medium mb-2">{title}</h3>
     <p className="text-slate-200 mb-2">{description}</p>
     <h4 className="text-slate-300 text-xl mb-4">{price}</h4>
     <a
      href="https://lil-baghdad.square.site/s/order?location=11ecbc4e2927f6a69d9aac1f6bbbcc9c&customer_seat_id=11ef0e78f85e40fa879a7a73c86d77ee#most-popular"
      aria-label="Lil Baghdad online"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center font-medium rounded-full w-full text-center h-12 border border-slate-200 text-slate-200 hover:bg-slate-300 hover:text-slate-700 hover:border-slate-300 transition duration-100"
     >
      Order Online
     </a>
    </div>
   </motion.section>
  </>
 )
}