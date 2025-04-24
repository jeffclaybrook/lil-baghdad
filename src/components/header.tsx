"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Doordash, Scroll, UberEats } from "./icons"

const containerVariants = {
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } }
}

export default function Header() {
 return (
  <motion.header
   initial="hidden"
   animate="visible"
   variants={containerVariants}
   className="flex flex-col items-center justify-center h-screen px-3 pb-16"
  >
   <figure className="flex flex-col items-center justify-center gap-4 mt-auto mb-10">
    <Image
     src="/logo.png"
     alt="Lil Baghdad logo"
     width={160}
     height={160}
     priority
     className="rounded-full mb-2"
    />
    <figcaption className="text-orange-600 text-xl uppercase font-light">
     <strong className="font-semibold">Iraqi</strong> made,{" "}
     <strong className="font-semibold">Texas</strong> inspired
    </figcaption>
   </figure>
   <div className="flex flex-col gap-4 max-w-xs w-full mb-auto">
    <a
     href="https://lil-baghdad.square.site/s/order?location=11ecbc4e2927f6a69d9aac1f6bbbcc9c&customer_seat_id=11ef0e78f85e40fa879a7a73c86d77ee#most-popular"
     aria-label="Order online"
     target="_blank"
     rel="noreferrer"
     className="inline-flex items-center justify-center font-medium rounded-full w-full text-center h-12 border border-slate-200 text-slate-200 hover:bg-slate-300 hover:text-slate-700 hover:border-slate-300 transition duration-100"
    >
     Order Online
    </a>
    <a
     href="https://www.doordash.com/store/lil-baghdad-copperas-cove-23416610/?pickup=true&utm_campaign=gpa"
     aria-label="Order on Doordash"
     target="_blank"
     rel="noreferrer"
     className="inline-flex items-center justify-center rounded-full w-full border h-12 border-slate-200 hover:bg-slate-300 hover:border-slate-300 transition duration-100"
    >
     <Doordash />
    </a>
    <a
     href="https://www.ubereats.com/store/lil-baghdad/ugkEkaVyX0eNfA6ezGU0eA"
     aria-label="Order on UberEats"
     target="_blank"
     rel="noreferrer"
     className="inline-flex items-center justify-center rounded-full h-12 w-full border border-slate-200 hover:bg-slate-300 hover:border-slate-300 transition duration-100"
    >
     <UberEats />
    </a>
   </div>
   <div className="flex flex-col items-center">
    <Scroll className="text-slate-200" />
    <p className="text-slate-200 text-sm text-center">Scroll to see menu</p>
   </div>
  </motion.header>
 )
}