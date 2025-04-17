import Link from "next/link"
import Section from "../(components)/section"
import { notFound } from "next/navigation"
import { items } from "@/lib/data"
import { Chevron } from "@/components/icons"

export default async function Item({ params }: { params: Promise<{ id: string }>}) {
 const { id } = await params
 const item = items.find((i) => i.id === id)

 if (!item) return notFound()

 return (
  <>
   <nav className="p-4">
    <Link href={"/"}>
     <Chevron />
    </Link>
   </nav>
   <Section
    title={item.title}
    category={item.category}
    description={item.description}
    image={item.image}
    price={item.price}
   />
  </>
 )
}