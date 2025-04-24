/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation"
import prisma from "@/utils/prisma"
import Section from "../(components)/section"

export async function generateStaticParams() {
 const items = await prisma.item.findMany({
  select: { id: true }
 })

 return items.map((item: any) => ({
  id: item.id
 }))
}

export const revalidate = 60

export default async function Item({ params }: { params: Promise<{ id: string }>}) {
 const item = await prisma.item.findUnique({
  where: { id: (await params).id }
 })

 if (!item) {
  notFound()
 }

 return (
  <Section
   title={item.title}
   category={item.category}
   description={item.description}
   image={item.image}
   price={item.price}
  />
 )
}