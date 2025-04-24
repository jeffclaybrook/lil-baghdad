"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

type SectionProps = {
 title: string
 children: ReactNode
}

const containerVariants = {
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } }
}

export default function Section({ title, children }: SectionProps) {
 return (
  <motion.section
   initial="hidden"
   animate="visible"
   variants={containerVariants}
   className="max-w-5xl w-full mx-auto px-4"
  >
   <h2 className="text-3xl text-slate-200 mb-4">{title}</h2>
   <div className="grid md:grid-cols-2 gap-4">{children}</div>
  </motion.section>
 )
}