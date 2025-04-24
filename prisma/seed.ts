import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
 await prisma.item.deleteMany()

 const items = [
  {
   title: "Appetizer Platter (Hummus, Tabbouleh, Cucumber Dip)",
   category: "Appetizers",
   description: "A Mezze platter presents an array of petite 4oz. dishes comprised of creamy chickpea hummus, tahini, finely chopped parsley tabouleh, and lusciously crafted homemade yogurt labneh. This beloved spread hails from Middle Eastern and Mediterranean regions and is accompanied by two freshly prepared flatbreads.",
   price: "$14.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/710nrfhtIc5E4FZkBXoqy9/dbfb276bb0b45e769a6108a96178d2b2/appetizer-platter.jpeg"
  },
  {
   title: "Falafel",
   category: "Appetizers",
   description: "8 deep-fried balls made from ground chickpeas, assorted green vegetables and spices.",
   price: "$7.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/7vYykx7WaGhPzyfkFs065c/604573e9c26cfd1da360cf602d89b71e/falafel.jpeg"
  },
  {
   title: "Middle East Salad",
   category: "Appetizers",
   description: "Diced tomatoes, onions, cucumber, and peppers tossed with a simple vinaigrette of lemon and olive oil.",
   price: "$5.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/6Gh4HAwO2a4eFNccZgCjNu/e3640e0e63a95acd1f4aa4650a5c8f00/middle-east-salad.jpeg"
  },
  {
   title: "Mixed Pickled Vegetables",
   category: "Appetizers",
   description: "Pickled vegetables with turmeric and spices mix.",
   price: "$3.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/5skpDgFpY8xo10gOZzhvTr/e19d05b6ebd5dbb388be2369978a0799/mixed-pickled-vegetables.jpeg"
  },
  {
   title: "Vegan Lentil Soup with Fresh Cumin Seeds and Turmeric",
   category: "Appetizers",
   description: "One of your iconic and highly loved lentil soup consisting of carrots, fried onion, turmeric and house spice blend slow boiled to perfection.",
   price: "$7.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/IvpCOpqcTJDDgGUYPbTZo/026b8f4b5a8903d0cd241d5984d6abbf/vegan-lentil-soup-with-fresh-cumin-seeds-and-turmeric.jpeg"
  },
  {
   title: "Home Fries",
   category: "Appetizers",
   description: "Herbed and flavored home fries packed with extreme flavor with our famous Tzatziki salsa.",
   price: "$6.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/KcVAP7wUtE4qI5QscmrHM/f1ba17abbed257d3dd01cf720740e33a/home-fries.jpeg"
  },
  {
   title: "Naan Bread with Shea Butter and Zaatar 2 Pieces",
   category: "Appetizers",
   description: "Our signature homemade naan bread is prepared and baked in an authentic clay oven that it will leave wanting seconds and thirds.",
   price: "$2.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/5hPQM3PNruDP0wzQg5PGEq/7ffdccbb7dc7fb829a515ccf80b765d3/naan_bread_with_shea_butter.jpeg"
  },
  {
   title: "Tabbouleh Salad",
   category: "Appetizers",
   description: "Our tasty tabbouleh salad consists of bulgur, tomatoes, a blend of herbs, and lemon juice.",
   price: "$5.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/2t5EyaxgMN7eJlOpvt8dBu/0e815f7e7443c292d0f6f06510a9ca24/tabbouleh-salad.jpeg"
  },
  {
   title: "Mama Ganoush",
   category: "Appetizers",
   description: "A sumptuous and hearty dish, meaty with no meat kind of vibes, eggplant dip made with roasted smoky eggplant, tomatoes, onion, garlic, olive oil, lemon juice, parsley, tomato paste, and salt.",
   price: "$6.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/2yPf9Ec9uPiluK56TkprqV/1ef6f97e95374cd98060ec59f0dd2114/mama-ganoush.jpeg"
  },
  {
   title: "Dolmeh Grape Leaves",
   category: "Appetizers",
   description: "Chopped beef, rice, onions, and aromatic spices hand-wrapped and slowly cooked for a melt-in-your-mouth texture.",
   price: "$6.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/7ICbqV5EdpyCM6sxmFlqz6/d119989fddc5f1026b8d25ab8fcc50a4/dolmeh-grape-leaves.jpeg"
  },
  {
   title: "Hummus Joy",
   category: "Appetizers",
   description: "Delicious, creamy, and flavorful hummus drizzled with Lebanese olive oil.",
   price: "$6.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/ZpCBzMmevcRHwEjIoooxd/fa6c0bf1cf42b5a38d2504e3f3792fcd/hummus-joy.jpeg"
  },
  {
   title: "Baba Ganoush",
   category: "Appetizers",
   description: "Spicy, aromatic roasted eggplant mixed with olive oil, tahini salsa, fresh lemon juice, and family spice recipe.",
   price: "$7.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/3Bzyy6VN67qb5GN7vpL3J9/0e4022d9994d714142f49c681933604c/baba-ganoush.jpeg"
  },
  {
   title: "Cucumber Dill Dip",
   category: "Appetizers",
   description: "Savory plain yogurt dip/salad made with fresh cucumber, fresh garlic, and dill.",
   price: "$6.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/5cHQaIxBxeWXHLRxR3HHX6/a5d0c690a5586941e12848e03294215d/cucumber-dill-dip.jpeg"
  },
  {
   title: "Tangy Pickled Turnips",
   category: "Appetizers",
   description: "Vinegary pickled turnips with a pinch of heat. The perfect complement to any of the savory dishes.",
   price: "$3.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/39zlb7qSf3KgvCqmaCAmsM/cb8f63c003962ecc248cacb9ff3af79d/tangy-pickled-turnips.jpeg"
  },
  {
   title: "Fried Rice Mix with Roasted Lamb Iraqi Style",
   category: "Dishes",
   description: "Basmati rice blended with an assortment of vegetables and flavored with a unique mixture of biryani baharat (spices) and additives. All is topped off with a gorgeous roasted piece of lamb and served with a salad and hummus. This is the fabulous Iraqi-style biryani with its unrivaled taste.",
   price: "$16.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/7ENxOqVlI0WHhKHbsp6XF9/496f3472e28bd1c809b8b0a0a8b0a724/fried-rice-mix-with-roasted-lamb-iraqi-style.jpeg"
  },
  {
   title: "Beef Shawarma Wrap",
   category: "Dishes",
   description: "Beef shawarma with pita bread, parsley, onions, tomatoes, radishes, tahini sauce, and beef.",
   price: "$13.00",
   image: "https://images.ctfassets.net/rmkbw43wse32/3mZVLdehcXgy7PSkycPnGO/b9179c36a719f92884f435fe269d4a43/beef-shawarma-wrap.jpeg"
  },
  {
   title: "Vegetable Wrap",
   category: "Dishes",
   description: "Sautéed vegetables and hummus, Arabic style pickles wrapped in Pita bread Make a tasty and deliciously tangy one-dish meal!",
   price: "$9.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/7cdz45jtpABGam521JlHEG/c1353bc717eb4176ab0a0d50e3f40ccf/vegetable-wrap.jpeg"
  },
  {
   title: "Lamb Gyro Wrap",
   category: "Dishes",
   description: "Shawarma is a dish in Middle Eastern cuisine consisting of meat cut into thin slices, stacked in a cone-like shape, and roasted on a slowly-turning vertical rotisserie or spit. Originally made of lamb or mutton, todays shawarma may also be chicken, turkey, beef, or veal our wrap is Lamb meat.",
   price: "$15.00",
   image: "https://images.ctfassets.net/rmkbw43wse32/50cHsopwCbnbJ8RnjcTZxc/9db1119ea59ac8a12414cb1bb2681475/lamb-gyro-wrap.jpeg"
  },
  {
   title: "Falafel Plate",
   category: "Dishes",
   description: "Garbanzo beans, greens, and spices is served on the top layer of rice, along with veggies, a side dipping hummus, and creamy tahini sauce.",
   price: "$12.50",
   image: "https://images.ctfassets.net/rmkbw43wse32/4ZAPacs4NmgQMFq1eGYmgS/05e66f68be28a7663321030ff852cb1d/falafel-plate.jpeg"
  },
  {
   title: "Fried Kibbeh",
   category: "Dishes",
   description: "Crispy golden fried basmati rice filled with roasted pine nuts, caramelized onion, raisin, and ground beef.",
   price: "$4.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/14tO9IJSuDC1uTXmhd8sRJ/5b87ea8e988651f0aedbe0fe080d1ffd/fried-kibbeh.jpeg"
  },
  {
   title: "Beef Shawarma Plate",
   category: "Dishes",
   description: "Tender beef mixed with homemade spices and roasted onion and green pepper served with hummus, Middle Eastern salad, and white rice.",
   price: "$14.00",
   image: "https://images.ctfassets.net/rmkbw43wse32/1miU7Ucr19yQ67NkfQpV0h/172fec98898d92f89b07d1cbc4551486/beef-shawarma-plate.jpeg"
  },
  {
   title: "Chicken Shawarma Plate",
   category: "Dishes",
   description: "Spicy marinated chicken strips served with fresh salad and royal rice served with fresh naan bread.",
   price: "$13.50",
   image: "https://images.ctfassets.net/rmkbw43wse32/6Ns6zuJv5i8QDmrqUGbpJe/8fc5e439a001ab490c0fab4360d807be/chicken-shawarma-plate.jpeg"
  },
  {
   title: "Lamb Kabab Gyro Style",
   category: "Dishes",
   description: "Flour, ground lamb, garlic, onion, fresh parsley, and Iraqi mix spices are the ingredients to our Kabab dish. The Kababs are deep-fried to golden brown perfection and served on a bed of white basmati rice with our house salad and side of hummus.",
   price: "$18.00",
   image: "https://images.ctfassets.net/rmkbw43wse32/28a5lz30komkCM9ujlA6vP/f230167f58e455d4bdecb35f06f2944f/lamb-kabab-gyro-style.jpeg"
  },
  {
   title: "Gyro Beef with Rice",
   category: "Dishes",
   description: "Flour, ground beef, and spices deep fried and served with our house salad, in-house hummus, and white Jasmine rice.",
   price: "$14.50",
   image: "https://images.ctfassets.net/rmkbw43wse32/6rJMKcUFVTNbnhOyplDr9i/72a5ef233e68224b2568c9d3364ef115/gyro-beef.jpeg"
  },
  {
   title: "Chicken Shawarma Wrap",
   category: "Dishes",
   description: "This is homemade Chicken Shawarma. It is made with special sauce and Arabic bread. The special sauce includes tahini, yogurt and fresh lemon juice, tomato sauce and black pepper. The shawarma is then wrapped with Arabic bread and inside is cucumber, tomato, onion, sauce, and good amount of chicken.",
   price: "$12.50",
   image: "https://images.ctfassets.net/rmkbw43wse32/53JWSp6yX4RefUYyHMcbOK/9fec2623fd0e1a461fd542a09dd53ddf/chicken-shawarma-wrap.jpeg"
  },
  {
   title: "Falafel Wrap",
   category: "Dishes",
   description: "One of the most popular Middle Eastern street foods, it is super flavorful and soft on the inside, but crunchy on the outside.",
   price: "$12.50",
   image: "https://images.ctfassets.net/rmkbw43wse32/7gUkEWe3HtHI0YZ04zUp7C/3f179b33f4d03ddf186b6402b40f4031/falafel-wrap.jpeg"
  },
  {
   title: "Chicken Curry with Rice",
   category: "Curry",
   description: "Originating from the Indian region, chicken curry includes a base of coriander and turmeric though the ground spices vary from region to region. Chicken curry in Iraqi cuisine tests the uniqueness of this spicy mix. Served with Basmati rice and a side salad and hummus.",
   price: "$14.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/7iCFvc4Lo1ARWYDNirB78k/54c490cc2775a57bd41ee7ce66e1a089/chicken-curry.jpeg"
  },
  {
   title: "Vegan Curry",
   category: "Curry",
   description: "Chickpea-coconut milk based curry served with steamed rice. It is an all-time favorite comfort food in many homes.",
   price: "$14.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/5DiyomUq2wTnoLdl8RlMjZ/664ee057ff8b97032dc3bddf076bb5df/vegan-curry.jpeg"
  },
  {
   title: "Bone-in Goat Curry with Rice",
   category: "Curry",
   description: "This recipe was handed down by my grandmother. Bone-in goat curry is made on special occasions by elders in the house. This slow-cooked goat meat is creamy and mildly spicy and served with Basmati rice and a side salad and hummus.",
   price: "$18.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/3YLpu5junQyrYDesOfHLpQ/3f9ddc8bfed93fba7d4e0b5fb5485514/bone-in-goat-curry.jpeg"
  },
  {
   title: "Baklava",
   category: "Desserts",
   description: "Made from layers of golden brown phyllo filled with chopped walnuts, sweeten with honey syrup, and a top with crushed pistachio.",
   price: "$4.50",
   image: "https://images.ctfassets.net/rmkbw43wse32/2ij8S41nqDhjZEi9LdWXfr/7a9d65bcfafd67cff581a8ddd1534253/baklava.jpeg"
  },
  {
   title: "Sopapilla Cheesecake",
   category: "Desserts",
   description: "Flaky crust with sweet cream cheese filling topped with cinnamon sugar.",
   price: "$4.00",
   image: "https://images.ctfassets.net/rmkbw43wse32/5Z5JADQT2aUKTzFzAvnjxk/9988b10a6823dbc3544849219a136af1/sopapilla-cheesecake.jpeg"
  },
  {
   title: "Chill Tamarind Drink",
   category: "Drinks",
   description: "It is a cool, sweet, and tangy drink with an awesome, refreshing taste. It really is a cool drink for a scorching summer.",
   price: "$1.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/4Jwa8r3EPVzz43mnrCFcoz/35d2aed4b749ec6064af2b782fb7a150/chill-tamarind-drink.png"
  },
  {
   title: "Rose and Pomegranate Tea",
   category: "Drinks",
   description: "Rose flavored and sweet Pomegranate cold beverage.",
   price: "$1.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/51mVfFXfly7StRa22Vgg78/1c16349bcf08dff14f0a43f3b4bec500/rose-and-pomegranate-tea.jpeg"
  },
  {
   title: "Lemonade Refreshing Iced Tea",
   category: "Drinks",
   description: "Fresh cardamom and lemon juice. It is sweet & delightful drink with no artificial add-ons.",
   price: "$1.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/2sHABUbqORJ06woFXbYbW/0b456b41bcd64406ead7d5ce40e87b63/lemonade-refreshing-iced-tea.jpeg"
  },
  {
   title: "Hibiscus Tea",
   category: "Drinks",
   description: "Popular herbal street drink made from dehydrated hibiscus with a sweet and sour taste.",
   price: "$1.99",
   image: "https://images.ctfassets.net/rmkbw43wse32/5dba5cnPB1NhxliR6iPkUX/e869dd6e8cb1c8b78052bec81fc70c9a/hibiscus-tea.jpeg"
  }
 ]

 await prisma.item.createMany({ data: items })

 console.log("Seed data inserted successfully")
}

main()
 .catch((e) => {
  console.error(e)
  process.exit(1)
 })
 .finally(async () => {
  await prisma.$disconnect()
 })