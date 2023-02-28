const appetizers = [
    {
        name: "Baba Ganoush",
        description: "Spicy, aromatic roasted eggplant mixed with olive oil, tahini salsa, fresh lemon juice, and family spice recipe.",
        price: "$6.99",
        image: "images/appetizer-1.webp"
    },
    {
        name: "Falafel",
        description: "8 deep-fried balls made from ground chickpeas, assorted green vegetables and spices.",
        price: "$6.99",
        image: "images/appetizer-2.webp"
    },
    {
        name: "Hummus Joy",
        description: "Delicious, creamy, and flavorful hummus drizzled with Lebanese olive oil.",
        price: "$6.99",
        image: "images/appetizer-3.webp"
    },
    {
        name: "Cucumber Dill Dip",
        description: "Savory plain yogurt dip/salad made with fresh cucumber, fresh garlic, and dill.",
        price: "$7.99",
        image: "images/appetizer-4.webp"
    },
    {
        name: "Dolmeh Grape Leaves",
        description: "Chopped beef, rice, onions, and aromatic spices hand-wrapped and slowly cooked for a melt-in-your-mouth texture.",
        price: "$9.00",
        image: "images/appetizer-5.webp"
    },
    {
        name: "Middle East Salad",
        description: "Diced tomatoes, onions, cucumber, and peppers tossed with a simple vinaigrette of lemon and olive oil.",
        price: "$5.99",
        image: "images/appetizer-6.webp"
    },
    {
        name: "Mixed Pickle Vegetables",
        description: "Enjoy mixed pickle vegetables.",
        price: "$3.99",
        image: "images/appetizer-7.webp"
    },
    {
        name: "Tangy Pickled Turnips",
        description: "Vinegary pickled turnips with a pinch of heat. The perfect complement to any of the savory dishes.",
        price: "$3.99",
        image: "images/appetizer-8.webp"
    },
    {
        name: "Mama Ganoush",
        description: "Enjoy hearty mama ganoush.",
        price: "$6.99",
        image: "images/appetizer-9.webp"
    },
    {
        name: "Home Fries",
        description: "Enjoy delicious home fries.",
        price: "$5.99",
        image: "images/appetizer-10.webp"
    },
    {
        name: "Tabbouleh",
        description: "Try out our tasty tabbouleh,",
        price: "$5.99",
        image: "images/appetizer-11.webp"
    }
];

const dishes = [
    {
        name: "Beef Kabab with Rice",
        description: "Flour, ground beef, and spices deep fried and served with our house salad, in-house hummus, and white Jasmine rice.",
        price: "$12.99",
        image: "images/dish-1.webp"
    },
    {
        name: "Chicken Shawarma Plate",
        description: "Spicy marinated chicken strips served with fresh salad and royal rice served with fresh naan bread.",
        price: "$12.00",
        image: "images/dish-2.webp"
    },
    {
        name: "Falafel Plate",
        description: "Garbanzo beans, greens, and spices is served on the top layer of rice, along with veggies, a side dipping hummus, and creamy tahini sauce.",
        price: "$10.00",
        image: "images/dish-3.webp"
    },
    {
        name: "Chicken Curry with Rice",
        description: "Try out our tasty chicken curry with a side of rice.",
        price: "$12.99",
        image: "images/dish-4.webp"
    },
    {
        name: "Beef Shawarma Plate",
        description: "Tender beef mixed with homemade spices and roasted onion and green pepper served with hummus, Middle Eastern salad, and white rice.",
        price: "$12.99",
        image: "images/dish-5.webp"
    },
    {
        name: "Beef Shawarma Sandwich",
        description: "Beef shawarma with pita bread, parsley, onions, tomatoes, radishes, tahini sauce, and beef.",
        price: "$12.00",
        image: "images/dish-6.webp"
    },
    {
        name: "Vegetarian Shawarma with Rice",
        description: "Crunchy mix of different cuts of fresh vegetables, tossed with aromatic spices and stir-fried to perfection and served with Basmati rice.",
        price: "$10.99",
        image: "images/dish-7.webp"
    },
    {
        name: "Fried Rice mix with Rosted Lamb Iraqi Style",
        description: "Basmati rice blended with an assortment of vegetables and a unique mix of biryani baharat and topped off with a gorgeous roasted piece of lamb.",
        price: "$15.00",
        image: "images/dish-8.webp"
    },
    {
        name: "Navy Beans mixed with Lamb and Rice",
        description: "Cannellini beans along with lamb chops cooked to perfection and served with white rice, bread, and salad.",
        price: "$13.99",
        image: "images/dish-9.webp"
    },
    {
        name: "Fresh Okra with Lamb Meat Stew and Rice",
        description: "Aromatic, lemony, and flavored dish, tender Lamb mixed with fresh Okra, tomato paste, and fresh lemon and served with rice.",
        price: "$15.00",
        image: "images/dish-10.webp"
    },
    {
        name: "Iraqi-Style Lentil Soup with French Cumin Seeds",
        description: "Lentil soup consisting of carrots, fried onion, turmeric and house spice blend slow boiled to perfection.",
        price: "$7.99",
        image: "images/dish-11.webp"
    },
    {
        name: "Falafel Sandwiches",
        description: "One of the most popular Middle Eastern street foods, it's super flavorful and soft on the inside, but crunchy on the outside.",
        price: "$9.99",
        image: "images/dish-12.webp"
    },
    {
        name: "Fried Kibbeh",
        description: "Crispy golden fried basmati rice filled with roasted pine nuts, caramelized onion, Raisin, and ground beef.",
        price: "$9.99",
        image: "images/dish-13.webp"
    },
    {
        name: "Vegetable Wrap",
        description: "Sautéed vegetables and hummus, Arabic style pickles wrapped in Pita bread Make a tasty and deliciously tangy one-dish meal!",
        price: "$9.99",
        image: "images/dish-14.webp"
    }
];

const desserts = [
    {
        name: "Baklava",
        description: "Enjoy tasty baklava.",
        price: "$4.00",
        image: "images/dessert-1.webp"
    },
    {
        name: "Sopapilla Cheesecake",
        description: "Flaky crust with sweet cream cheese filling topped with cinnamon sugar.",
        price: "$4.00",
        image: "images/dessert-2.webp"
    }
];

const drinks = [
    {
        name: "Hibiscus Tea",
        description: "Popular herbal street drink made from dehydrated hibiscus with a sweet and sour taste.",
        price: "$2.00",
        image: "images/drink-1.webp"
    },
    {
        name: "Lemonade Refreshing Iced Tea",
        description: "Fresh cardamom and lemon juice. It is sweet & delightful drink with no artificial add-ons.",
        price: "$2.00",
        image: "images/drink-2.webp"
    },
    {
        name: "Rose & Pomegranate Tea",
        description: "Rose flavored and sweet Pomegranate cold beverage.",
        price: "$2.00",
        image: "images/drink-3.webp"
    }
];

appetizers.forEach(item => {
    const liTag = document.createElement('li');
    liTag.classList.add('item');
    liTag.innerHTML = `
    <div class="item-details">
        <h3 data-name="${item.name}">${item.name}</h3>
        <p data-description="${item.description}">${item.description}</p>
        <h4 data-price="${item.price}">${item.price}</h4>
    </div>
    <div class="item-image">
        <img data-image="${item.image}" src="${item.image}" alt="${item.name}" loading="lazy">
    </div>`;
    document.querySelector('#appetizers ul').appendChild(liTag);
})

dishes.forEach(item => {
    const liTag = document.createElement('li');
    liTag.classList.add('item');
    liTag.innerHTML = `
    <div class="item-details">
        <h3 data-name="${item.name}">${item.name}</h3>
        <p data-description="${item.description}">${item.description}</p>
        <h4 data-price="${item.price}">${item.price}</h4>
    </div>
    <div class="item-image">
        <img data-image="${item.image}" src="${item.image}" alt="${item.name}" loading="lazy">
    </div>`;
    document.querySelector('#dishes ul').appendChild(liTag);
})

desserts.forEach(item => {
    const liTag = document.createElement('li');
    liTag.classList.add('item');
    liTag.innerHTML = `
    <div class="item-details">
        <h3 data-name="${item.name}">${item.name}</h3>
        <p data-description="${item.description}">${item.description}</p>
        <h4 data-price="${item.price}">${item.price}</h4>
    </div>
    <div class="item-image">
        <img data-image="${item.image}" src="${item.image}" alt="${item.name}" loading="lazy">
    </div>`;
    document.querySelector('#desserts ul').appendChild(liTag);
})

drinks.forEach(item => {
    const liTag = document.createElement('li');
    liTag.classList.add('item');
    liTag.innerHTML = `
    <div class="item-details">
        <h3 data-name="${item.name}">${item.name}</h3>
        <p data-description="${item.description}">${item.description}</p>
        <h4 data-price="${item.price}">${item.price}</h4>
    </div>
    <div class="item-image">
        <img data-image="${item.image}" src="${item.image}" alt="${item.name}" loading="lazy">
    </div>`;
    document.querySelector('#drinks ul').appendChild(liTag);
})

const tabs = document.querySelectorAll('nav li');
tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tabs[i].classList.add('active');
    })
})

const modal = document.querySelector('aside');
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.addEventListener('click', e => {
        const name = e.target.closest('li').querySelector('h3').getAttribute('data-name');
        const description = e.target.closest('li').querySelector('p').getAttribute('data-description');
        const price = e.target.closest('li').querySelector('h4').getAttribute('data-price');
        const image = e.target.closest('li').querySelector('img').getAttribute('data-image');
        document.querySelector('.modal-header img').src = `${image}`;
        document.querySelector('.modal-body h3').innerText = `${name}`;
        document.querySelector('.modal-body p').innerText = `${description}`;
        document.querySelector('.modal-body h4').innerText = `${price}`;
        modal.classList.add('visible');
    })
})

const closeModal = () => {
    modal.classList.remove('visible');
    document.querySelector('.modal-body h3').innerText = '';
    document.querySelector('.modal-body p').innerText = '';
    document.querySelector('.modal-body h4').innerText = '';
    document.querySelector('.modal-header img').src = '';
}

window.onscroll = () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id')
        }
    })

    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.classList.contains(current)) {
            tab.classList.add('active')
        }
    })
}
