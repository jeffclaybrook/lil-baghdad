import Image from "next/image"
import Link from "next/link"

type CardProps = {
 title: string
 price: string
 image: string
 id: string
}

export default function Card({ title, price, image, id }: CardProps) {
 return (
  <Link href={`/item/${id}`} className="flex flex-col gap-4 border border-slate-600 p-4 rounded-xl hover:bg-slate-800 duration-100">
   <Image
    src={image}
    alt={title}
    width={750}
    height={200}
    className="rounded-xl aspect-video"
   />
   <div className="flex flex-col">
    <h3 className="text-xl font-medium mb-2 text-slate-50">{title}</h3>
    <h4 className="text-xl font-normal text-slate-400">{price}</h4>
   </div>
  </Link>
 )
}