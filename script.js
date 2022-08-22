window.addEventListener('DOMContentLoaded', () => {
    const appetizers = [
        {
            name: "Baba Ganoush",
            description: "Spicy, aromatic roasted eggplant mixed with olive oil, tahini salsa, fresh lemon juice, and family spice recipe.",
            price: "$6.99",
            image: "appetizer-1.jpeg"
        },
        {
            name: "Falafel",
            description: "Deep-fried ball made from ground chickpeas, assorted green vegetables and spices.",
            price: "$5.00",
            image: "appetizer-2.jpeg"
        },
        {
            name: "Hummus Joy",
            description: "Delicious, creamy, and flavorful hummus drizzled with Lebanese olive oil.",
            price: "$6.99",
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
            description: "Chopped beef, rice, onions, and aromatic spices hand-wrapped and slowly cooked for a melt-in-your-mouth texture.",
            price: "$9.00",
            image: "appetizer-5.jpeg"
        },
        {
            name: "Middle East Salad",
            description: "Diced tomatoes, onions, cucumber, and peppers tossed with a simple vinaigrette of lemon and olive oil.",
            price: "$5.99",
            image: "appetizer-6.jpeg"
        },
        {
            name: "Mixed Pickle Vegetables",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae nam quos neque recusandae assumenda.",
            price: "$3.99",
            image: "appetizer-7.jpeg"
        }
    ]

    const dishes = [
        {
            name: "Beef Kabab with Rice",
            description: "Flour, ground beef, and spices deep fried and served with our house salad, in-house hummus, and white Jasmine rice.",
            price: "$12.99",
            image: "dish-1.jpeg"
        },
        {
            name: "Chicken Shawarma Plate",
            description: "Spicy marinated chicken strips served with fresh salad and royal rice served with fresh naan bread.",
            price: "$12.00",
            image: "dish-2.jpeg"
        },
        {
            name: "Falafel Plate",
            description: "Garbanzo beans, greens, and spices is served on the top layer of rice, along with veggies, a side dipping hummus, and creamy tahini sauce.",
            price: "$10.00",
            image: "dish-3.jpeg"
        },
        {
            name: "Chicken Curry with Rice",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae nam quos neque recusandae assumenda.",
            price: "$12.99",
            image: "dish-4.jpeg"
        },
        {
            name: "Beef Shawarma Plate",
            description: "Tender beef mixed with homemade spices and roasted onion and green pepper served with hummus, Middle Eastern salad, and white rice.",
            price: "$12.99",
            image: "dish-5.jpeg"
        },
        {
            name: "Beef Shawarma Sandwich",
            description: "Beef shawarma with pita bread, parsley, onions, tomatoes, radishes, tahini sauce, and beef.",
            price: "$12.00",
            image: "dish-6.jpeg"
        },
        {
            name: "Vegetarian Shawarma with Rice",
            description: "Crunchy mix of different cuts of fresh vegetables, tossed with aromatic spices and stir-fried to perfection and served with Basmati rice.",
            price: "$10.99",
            image: "dish-7.jpeg"
        },
        {
            name: "Fried Rice mix with Rosted Lamb Iraqi Style",
            description: "Basmati rice blended with an assortment of vegetables and a unique mix of biryani baharat and topped off with a gorgeous roasted piece of lamb.",
            price: "$15.00",
            image: "dish-8.jpeg"
        },
        {
            name: "Beef Kebab Plate",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae nam quos neque recusandae assumenda.",
            price: "$11.00",
            image: "dish-9.jpeg"
        },
        {
            name: "Navy Beans mixed with Lamb and Rice",
            description: "Cannellini beans along with lamb chops cooked to perfection and served with white rice, bread, and salad.",
            price: "$13.99",
            image: "dish-10.jpeg"
        },
        {
            name: "Fresh Okra with Lamb Meat Stew and Rice",
            description: "Aromatic, lemony, and flavored dish, tender Lamb mixed with fresh Okra, tomato paste, and fresh lemon and served with rice.",
            price: "$15.00",
            image: "dish-11.jpeg"
        },
        {
            name: "Iraqi-Style Lentil Soup with French Cumin Seeds",
            description: "Lentil soup consisting of carrots, fried onion, turmeric and house spice blend slow boiled to perfection.",
            price: "$7.99",
            image: "dish-12.jpeg"
        }
    ]

    const desserts = [
        {
            name: "Baklava",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto quidem eum obcaecati vitae. Assumenda!",
            price: "$4.00",
            image: "dessert-1.jpeg"
        },
        {
            name: "Sopapilla Cheesecake",
            description: "Flaky crust with sweet cream cheese filling topped with cinnamon sugar.",
            price: "$4.00",
            image: "dessert-2.jpeg"
        }
    ]

    const drinks = [
        {
            name: "Hibiscus Tea",
            description: "Popular herbal street drink made from dehydrated hibiscus with a sweet and sour taste.",
            price: "$2.00",
            image: "drink-1.jpeg"
        },
        {
            name: "Lemonade Refreshing Iced Tea",
            description: "Fresh cardamom and lemon juice. It is sweet & delightful drink with no artificial add-ons.",
            price: "$2.00",
            image: "drink-2.jpeg"
        },
        {
            name: "Rose & Pomegranate Tea",
            description: "Rose flavored and sweet Pomegranate cold drink.",
            price: "$2.00",
            image: "drink-3.jpeg"
        }
    ]

    document.querySelector('header').innerHTML =
    `<img src="images/logo.svg" alt="Lil Baghdad logo">`;

    document.querySelector('nav').innerHTML =
    `<ul>
        <li class="appetizers active"><a href="#appetizers">Appetizers</a></li>
        <li class="dishes"><a href="#dishes">Dishes</a></li>
        <li class="desserts"><a href="#desserts">Desserts</a></li>
        <li class="drinks"><a href="#drinks">Drinks</a></li>
    </ul>`;

    const tabs = document.querySelectorAll('nav li');
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => {
                tab.classList.remove('active')
            })
            tabs[index].classList.add('active')
        })
    })

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const title = document.createElement('h2');
        const article = document.createElement('article');
        section.appendChild(title);
        section.appendChild(article);
    })

    appetizers.forEach(appetizer => {
        const title = document.querySelector('#appetizers h2');
        const article = document.querySelector('#appetizers article');
        const div = document.createElement('div');
        title.innerText = 'Appetizers';
        div.classList.add('item');
        div.innerHTML =
        `<div class="item-details">
            <h3>${appetizer.name}</h3>
            <p>${appetizer.description}</p>
            <h4>${appetizer.price}</h4>
        </div>
        <div class="item-image">
            <img src="images/${appetizer.image}" alt="${appetizer.name}" loading="lazy">
        </div>`;
        article.appendChild(div);
    })

    dishes.forEach(dish => {
        const title = document.querySelector('#dishes h2');
        const article = document.querySelector('#dishes article');
        const div = document.createElement('div');
        title.innerText = 'Dishes';
        div.classList.add('item');
        div.innerHTML =
        `<div class="item-details">
            <h3>${dish.name}</h3>
            <p>${dish.description}</p>
            <h4>${dish.price}</h4>
        </div>
        <div class="item-image">
            <img src="images/${dish.image}" alt="${dish.name}" loading="lazy">
        </div>`;
        article.appendChild(div);
    })

    desserts.forEach(dessert => {
        const title = document.querySelector('#desserts h2');
        const article = document.querySelector('#desserts article');
        const div = document.createElement('div');
        title.innerText = 'Desserts';
        div.classList.add('item');
        div.innerHTML = 
        `<div class="item-details">
            <h3>${dessert.name}</h3>
            <p>${dessert.description}</p>
            <h4>${dessert.price}</h4>
        </div>
        <div class="item-image">
            <img src="images/${dessert.image}" alt="${dessert.name}" loading="lazy">
        </div>`;
        article.appendChild(div);
    })

    drinks.forEach(drink => {
        const title = document.querySelector('#drinks h2');
        const article = document.querySelector('#drinks article');
        const div = document.createElement('div');
        title.innerText = 'Drinks';
        div.classList.add('item');
        div.innerHTML = 
        `<div class="item-details">
            <h3>${drink.name}</h3>
            <p>${drink.description}</p>
            <h4>${drink.price}</h4>
        </div>
        <div class="item-image">
            <img src="images/${drink.image}" alt="${drink.name}" loading="lazy">
        </div>`;
        article.appendChild(div);
    })

    const links = [
        'https://www.facebook.com/profile.php?id=100074970285412/',
        'https://www.instagram.com/desireddishes/',
        'https://www.doordash.com/store/lil-baghdad-copperas-cove-23416610/',
        'tel:(512)-300-9655'
    ]
    document.querySelector('footer').innerHTML =
    `<img src="images/logo.svg" alt="Lil Baghdad Logo" loading="lazy">
    <ul>
        <li><a href="${links[0]}" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href="${links[1]}" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href="${links[2]}" target="_blank"><i class="fa-brands fa-google"></i></a></li>
        <li><a href="${links[3]}" target="_blank"><i class="fa-solid fa-phone"></i></a></li>
    </ul>
    <p>&copy; 2022 Jeffrey Claybrook</p>`;
})

window.onscroll = () => {
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id')
        }
    })

    const tabs = document.querySelectorAll('nav li');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.classList.contains(current)) {
            tab.classList.add('active')
        }
    })
}