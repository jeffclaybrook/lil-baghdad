import Card from "@/components/card"
import Header from "@/components/header"
import Section from "@/components/section"
import Separator from "@/components/separator"
import { items, Item } from "@/lib/data"

function groupItemsByCategory(items: Item[]) {
 return items.reduce<Record<string, Item[]>>((acc, item) => {
  if (!acc[item.category]) {
   acc[item.category] = []
  }
  acc[item.category].push(item)
  return acc
 }, {})
}

export default function Home() {
 const groupedItems = groupItemsByCategory(items)

 return (
  <>
   <Header />
   {Object.entries(groupedItems).map(([category, items], i, array) => {
    const isLast = i === array.length - 1

    return (
     <div key={category}>
      <Section title={category}>
       {items.map((item) => (
        <Card
         key={item.id}
         title={item.title}
         image={item.image}
         price={item.price}
         id={item.id}
        />
       ))}
      </Section>
      {!isLast && (
       <Separator />
      )}
     </div>
    )
   })}
  </>
 )
}