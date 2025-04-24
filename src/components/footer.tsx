import Image from "next/image"
import Link from "next/link"
import { Facebook, Google, Instagram, Phone } from "./icons"

const links = [
 { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100074970285412/", icon: Facebook },
 { label: "Instagram", href: "https://www.instagram.com/desireddishes/", icon: Instagram },
 { label: "Google", href: "https://goo.gl/maps/DjnmrwDQn6bWSLAj9", icon: Google },
 { label: "Phone", href: "tel:(512)-831-8122", icon: Phone }
]

export default function Footer() {
 return (
  <footer className="flex flex-col items-center justify-center gap-6 py-12 mt-24 px-4 border-t border-slate-500">
   <Link
    href={"/"}
    aria-label="Home"
    className="rounded-full"
   >
    <Image
     src="/logo.png"
     alt="Lil Baghdad logo"
     width={140}
     height={140}
     className="rounded-full"
    />
   </Link>
   <ul className="flex items-center justify-center gap-5">
    {links.map((link, i) => (
     <li key={i} className="relative group inline-block">
      <a
       href={link.href}
       aria-label={link.label}
       target="_blank"
       rel="noreferrer"
       className="inline-flex items-center justify-center p-3 text-slate-200 rounded-full border border-slate-200 hover:bg-slate-200 hover:text-slate-700 transition duration-100"
      >
       <link.icon />
       <span className="sr-only">{link.label}</span>
      </a>
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex px-3 py-1.5 bg-white text-slate-800 text-sm rounded-md shadow-md z-10 whitespace-nowrap">{link.label}</span>
     </li>
    ))}
   </ul>
   <a
    href="https://goo.gl/maps/DjnmrwDQn6bWSLAj9"
    aria-label="Google Maps"
    target="_blank"
    rel="noreferrer"
    className="text-slate-200 text-center hover:underline"
   >
    Taste of Cove, 105 W Avenue A <br />
    Copperas Cove, TX 76522
   </a>
   <p className="text-slate-300 text-sm text-center">&copy; 2025 Lil Baghdad. All rights reserved.</p>
  </footer>
 )
}