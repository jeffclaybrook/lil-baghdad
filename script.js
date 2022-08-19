const appetizers = [
   {
      name: "Baba Ganoush",
      description: "Spicy, aromatic roasted eggplant mixed with olive oil, tahini salsa, fresh lemon juice, and family spice recipe.",
      price: "$7.99",
      image: "appetizer-1.jpeg"
   },
   {
      name: "Falafel",
      description: "Falafel is a deep-fried ball mainly made from ground chickpeas, assorted green vegetables and spices. These pair well with tahini dipping sauce. Tahini is a condiment made from toasted ground hulled sesame. Add extra pita, hummus and Fattoush salad from my menu to complete a make your own kit Pita pocket Falafel!",
      price: "$7.99",
      image: "appetizer-2.jpeg"
   },
   {
      name: "Hummus Joy",
      description: "Delicious, creamy, and flavorful hummus drizzled with Lebanese olive oil. Hummus can be eaten as a breakfast or appetizer; it can even be an addition to your meal. My favorite way to eat hummus is with bread and eggs early in the morning. You can even use it as a sandwich spread.",
      price: "$7.99",
      image: "appetizer-3.jpeg"
   },
   {
      name: "Cucumber Dill Dip",
      description: "Savory plain yogurt dip/salad made with fresh cucumber, fresh garlic, and dill.",
      price: "$7.99",
      image: "appetizer-4.jpeg"
   },
   {
      name: "Dolmeh Grape Leaves",
      description: "Many culinary cultures of the Mediterranean claim the dolma for their own and hotly debate its proper preparation. This Armenian version is made with chopped beef, rice, onions, and aromatic spices hand-wrapped and slowly cooked for a melt-in-your-mouth texture. Best served with yogurt-garlic sauce.",
      price: "$8.99",
      image: "appetizer-5.jpeg"
   },
   {
      name: "Middle East Salad",
      description: "Crunchy, simple and refreshing salad, made with diced tomatoes, onions, cucumber, and peppers. Tossed with a simple vinaigrette of lemon and olive oil. This salad is popular all over the Middle East, and varies only slightly in preparation.",
      price: "$5.99",
      image: "appetizer-6.jpeg"
   },
   {
      name: "Mixed Pickle Vegetables",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vel eaque libero dolorem tenetur qui voluptates suscipit in! Odit, quasi.",
      price: "$3.99",
      image: "appetizer-7.jpeg"
   }
];

const dishes = [
   {
      name: "Beef Kabab with Rice",
      description: "Flour, ground beef and spices are the ingredients to our Kabab dish. The Kababs are deep fried to golden brown perfection and serve with our house salad, in house hummus and white Jasmine rice.",
      price: "$12.99",
      image: "dish-1.jpeg"
   },
   {
      name: "Chicken Shawarma Plate",
      description: "Spicy marinated chicken strips served with fresh salad and royal rice. This dish comes with fresh naan bread and pairs best with any of our other sides.",
      price: "$11.99",
      image: "dish-2.jpeg"
   },
   {
      name: "Falafel Plate",
      description: "A vegan falafel made of garbanzo beans, greens, and spices is served on the top layer of rice, along with veggies, a side dipping hummus, and creamy tahini sauce. This gourmet plate has been beloved by my friends and family. The falafel balls are topped with salads, pickled vegetables, and hot sauce, and drizzled with tahini-based sauces.",
      price: "$10.99",
      image: "dish-3.jpeg"
   },
   {
      name: "Chicken Curry with Rice",
      description: "Chicken Curry is a dish originating from the Indian subcontinent. The ground spices used in Indian curry blends do vary from region to region, but some common ingredients in curry powder include a base of coriander and turmeric. Chicken Curry in Iraqi cuisine tests the uniqueness of the spices mix, the dish comes with Basmati Rice.",
      price: "$12.99",
      image: "dish-4.jpeg"
   },
   {
      name: "Beef Shawarma Plate",
      description: "Tender beef mixed with homemade spices and roasted onion and green paper. The dish is served with hummus, Middle Eastern salad, and white rice. The meat sits in the spaces overnight to be marinated with my mother's spices mix that we had for generations.",
      price: "$12.99",
      image: "dish-5.jpeg"
   },
   {
      name: "Beef Shawarma Sandwich",
      description: "Beef shawarma With pita bread, parsley, onions, tomatoes, radishes, tahini sauce, and beef, this sandwich is definitely a feast.",
      price: "$12.99",
      image: "dish-6.jpeg"
   },
   {
      name: "Vegetarian Shawarma with Rice",
      description: "This is a very special recipe because it fostered my children's love for vegetables, and my entire family (including my nieces and nephews) now all look forward to this mildly spicy veggie dish! It's a crunchy mix of different cuts of fresh vegetables, tossed with aromatic spices and stir-fried to perfection, it comes with Basmati rice.",
      price: "$10.99",
      image: "dish-7.jpeg"
   },
   {
      name: "Fried Rice mix with Rosted Lamb Iraqi Style",
      description: "This is the fabulous Iraqi-style biryani with its unrivaled taste. A liberal amount of basmati rice is blended with a miscellaneous assortment of vegetables and flavored with a unique mixture of biryani baharat (spices) and additives. All is topped off with a gorgeous roasted piece of lamb.",
      price: "$15.00",
      image: "dish-8.jpeg"
   },
   {
      name: "Beef Kebab Plate",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vel eaque libero dolorem tenetur qui voluptates suscipit in! Odit, quasi.",
      price: "$10.99",
      image: "dish-9.jpeg"
   },
   {
      name: "Navy Beans mixed with Lamb and Rice",
      description: "In Iraq, we call this 'fasoolya bil lahmeh', which translates as beans with meat. It’s a traditional recipe my mom cooked, especially in winter. I grew up in Baghdad, having this dish at least once a month. White beans (cannellini beans) are cooked along with lamb chops to perfection and served with white rice. The dish comes with bread and salad.",
      price: "$13.99",
      image: "dish-10.jpeg"
   },
   {
      name: "Fresh Okra with Lamb Meat Stew and Rice",
      description: "Aromatic, lemony, and flavored dish, tender Lamb  mixed with fresh Okra, tomato paste, and fresh lemon. The dish is passed to me from my mother, who was born and raised in Baghdad. It's a family secret recipe. Comes with rice.",
      price: "$15.00",
      image: "dish-11.jpeg"
   },
   {
      name: "Iraqi-Style Lentil Soup with French Cumin Seeds",
      description: "One of your iconic and highly loved lentil soup consisting of carrots, fried onion, turmeric and house spice blend slow boiled to perfection. Simple ter-sensational.",
      price: "$7.99",
      image: "dish-12.jpeg"
   }
];

const desserts = [
   {
      name: "Baklava",
      description: "Baklava is a crispy, nutty, and syrupy traditional dessert. This dessert is made from layers of golden brown phyllo filled with chopped walnuts, sweeten with honey syrup, and a top with crushed pistachio. It is a delicious treat that can be enjoyed on its own or with coffee or hot tea.",
      price: "$4.50",
      image: "dessert-1.jpeg"
   },
   {
      name: "Sopapilla Cheesecake",
      description: "Flaky crust with sweet cream cheese filling topped with cinnamon sugar.",
      price: "$4.50",
      image: "dessert-2.jpeg"
   }
];

const drinks = [
   {
      name: "Hibiscus Tea",
      description: "Hibiscus Tea is also known as Zobo in the south of Nigeria. It has a sweet and sour taste. It's a popular herbal street drink made from dehydrated hibiscus. Enjoy this refreshing drink!",
      price: "$1.99",
      image: "drink-1.jpeg"
   },
   {
      name: "Lemonade Refreshing Iced Tea",
      description: "This refreshing drink is composed of fresh cardamom and lemon juice. It is sweet & delightful drink with no artificial add-ons. Perfect for the hot summer days or as a side for your dinner/lunch.",
      price: "$1.99",
      image: "drink-2.jpeg"
   },
   {
      name: "Rose & Pomegranate Tea",
      description: "Rose flavored and sweet Pomegranate cold drink.",
      price: "$1.99",
      image: "drink-3.jpeg"
   }
];

const tabs = document.querySelectorAll('.tabs a');

tabs.forEach((tab, index) => {
   tab.addEventListener('click', () => {
      tabs.forEach(tab => {
         tab.classList.remove('active')
      })
      tabs[index].classList.add('active');
   })
})