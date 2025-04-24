import type { Metadata } from "next"
import { Host_Grotesk } from "next/font/google"
import { ReactNode } from "react"
import Footer from "@/components/footer"
import "./globals.css"

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Lil Baghdad",
  description: "Lil Baghdad Iraqi Cuisine"
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#1d232a]">
      <body className={`${hostGrotesk.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}