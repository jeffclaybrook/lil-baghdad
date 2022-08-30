const appetizers = [
    {
        name: "Baba Ganoush",
        description: "Spicy, aromatic roasted eggplant mixed with olive oil, tahini salsa, fresh lemon juice, and family spice recipe.",
        price: "$6.99",
        image: "appetizer-1.webp"
    },
    {
        name: "Falafel",
        description: "Deep-fried ball made from ground chickpeas, assorted green vegetables and spices.",
        price: "$5.00",
        image: "appetizer-2.webp"
    },
    {
        name: "Hummus Joy",
        description: "Delicious, creamy, and flavorful hummus drizzled with Lebanese olive oil.",
        price: "$6.99",
        image: "appetizer-3.webp"
    },
    {
        name: "Cucumber Dill Dip",
        description: "Savory plain yogurt dip/salad made with fresh cucumber, fresh garlic, and dill.",
        price: "$7.99",
        image: "appetizer-4.webp"
    },
    {
        name: "Dolmeh Grape Leaves",
        description: "Chopped beef, rice, onions, and aromatic spices hand-wrapped and slowly cooked for a melt-in-your-mouth texture.",
        price: "$9.00",
        image: "appetizer-5.webp"
    },
    {
        name: "Middle East Salad",
        description: "Diced tomatoes, onions, cucumber, and peppers tossed with a simple vinaigrette of lemon and olive oil.",
        price: "$5.99",
        image: "appetizer-6.webp"
    },
    {
        name: "Mixed Pickle Vegetables",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae nam quos neque recusandae assumenda.",
        price: "$3.99",
        image: "appetizer-7.webp"
    }
];

const dishes = [
    {
        name: "Beef Kabab with Rice",
        description: "Flour, ground beef, and spices deep fried and served with our house salad, in-house hummus, and white Jasmine rice.",
        price: "$12.99",
        image: "dish-1.webp"
    },
    {
        name: "Chicken Shawarma Plate",
        description: "Spicy marinated chicken strips served with fresh salad and royal rice served with fresh naan bread.",
        price: "$12.00",
        image: "dish-2.webp"
    },
    {
        name: "Falafel Plate",
        description: "Garbanzo beans, greens, and spices is served on the top layer of rice, along with veggies, a side dipping hummus, and creamy tahini sauce.",
        price: "$10.00",
        image: "dish-3.webp"
    },
    {
        name: "Chicken Curry with Rice",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae nam quos neque recusandae assumenda.",
        price: "$12.99",
        image: "dish-4.webp"
    },
    {
        name: "Beef Shawarma Plate",
        description: "Tender beef mixed with homemade spices and roasted onion and green pepper served with hummus, Middle Eastern salad, and white rice.",
        price: "$12.99",
        image: "dish-5.webp"
    },
    {
        name: "Beef Shawarma Sandwich",
        description: "Beef shawarma with pita bread, parsley, onions, tomatoes, radishes, tahini sauce, and beef.",
        price: "$12.00",
        image: "dish-6.webp"
    },
    {
        name: "Vegetarian Shawarma with Rice",
        description: "Crunchy mix of different cuts of fresh vegetables, tossed with aromatic spices and stir-fried to perfection and served with Basmati rice.",
        price: "$10.99",
        image: "dish-7.webp"
    },
    {
        name: "Fried Rice mix with Rosted Lamb Iraqi Style",
        description: "Basmati rice blended with an assortment of vegetables and a unique mix of biryani baharat and topped off with a gorgeous roasted piece of lamb.",
        price: "$15.00",
        image: "dish-8.webp"
    },
    {
        name: "Beef Kebab Plate",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae nam quos neque recusandae assumenda.",
        price: "$11.00",
        image: "dish-9.webp"
    },
    {
        name: "Navy Beans mixed with Lamb and Rice",
        description: "Cannellini beans along with lamb chops cooked to perfection and served with white rice, bread, and salad.",
        price: "$13.99",
        image: "dish-10.webp"
    },
    {
        name: "Fresh Okra with Lamb Meat Stew and Rice",
        description: "Aromatic, lemony, and flavored dish, tender Lamb mixed with fresh Okra, tomato paste, and fresh lemon and served with rice.",
        price: "$15.00",
        image: "dish-11.webp"
    },
    {
        name: "Iraqi-Style Lentil Soup with French Cumin Seeds",
        description: "Lentil soup consisting of carrots, fried onion, turmeric and house spice blend slow boiled to perfection.",
        price: "$7.99",
        image: "dish-12.webp"
    }
];

const desserts = [
    {
        name: "Baklava",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto quidem eum obcaecati vitae. Assumenda!",
        price: "$4.00",
        image: "dessert-1.webp"
    },
    {
        name: "Sopapilla Cheesecake",
        description: "Flaky crust with sweet cream cheese filling topped with cinnamon sugar.",
        price: "$4.00",
        image: "dessert-2.webp"
    }
];

const drinks = [
    {
        name: "Hibiscus Tea",
        description: "Popular herbal street drink made from dehydrated hibiscus with a sweet and sour taste.",
        price: "$2.00",
        image: "drink-1.webp"
    },
    {
        name: "Lemonade Refreshing Iced Tea",
        description: "Fresh cardamom and lemon juice. It is sweet & delightful drink with no artificial add-ons.",
        price: "$2.00",
        image: "drink-2.webp"
    },
    {
        name: "Rose & Pomegranate Tea",
        description: "Rose flavored and sweet Pomegranate cold beverage.",
        price: "$2.00",
        image: "drink-3.webp"
    }
];

const tabs = document.querySelectorAll('nav li');
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tabs[index].classList.add('active');
    })
})

document.querySelector('header .image-wrapper').setAttribute('aria-label', 'Lil Baghdad header home link');
document.querySelector('footer .image-wrapper').setAttribute('aria-label', 'Lil Baghdad footer home link');

document.querySelector('header .image-wrapper img').setAttribute('alt', 'Lil Baghdad header logo')
document.querySelector('footer .image-wrapper img').setAttribute('alt', 'Lil Baghdad footer logo')

document.querySelector('nav li:nth-child(1) a').setAttribute('aria-label', 'Lil Baghdad appetizers navigation tab');
document.querySelector('nav li:nth-child(2) a').setAttribute('aria-label', 'Lil Baghdad dishes navigation tab');
document.querySelector('nav li:nth-child(3) a').setAttribute('aria-label', 'Lil Baghdad desserts navigation tab');
document.querySelector('nav li:nth-child(4) a').setAttribute('aria-label', 'Lil Baghdad drinks navigation tab');

document.querySelector('footer li:nth-child(1) a').setAttribute('aria-label', 'Lil Baghdad Facebook link')
document.querySelector('footer li:nth-child(2) a').setAttribute('aria-label', 'Lil Baghdad Instagram link')
document.querySelector('footer li:nth-child(3) a').setAttribute('aria-label', 'Lil Baghdad Google link')
document.querySelector('footer li:nth-child(4) a').setAttribute('aria-label', 'Lil Baghdad Phone Number link')


const sections = document.querySelectorAll('section');
sections.forEach(section => {
    const id = section.getAttribute('id');
    const title = document.createElement('h2');
    const ulTag = document.createElement('ul');
    title.innerText = `${id}`;
    title.setAttribute('id', `${id}-section`);
    section.setAttribute('aria-labelledby', `${id}-section`);
    section.appendChild(title);
    section.appendChild(ulTag);
})

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
        <img data-src="images/${item.image}" src="images/${item.image}" width="90px" height="90px" alt="${item.description}">
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
        <img data-src="images/${item.image}" src="images/${item.image}" width="90px" height="90px" alt="${item.description}" loading="lazy">
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
        <img data-src="images/${item.image}" src="images/${item.image}" width="90px" height="90px" alt="${item.description}" loading="lazy">
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
        <img data-src="images/${item.image}" src="images/${item.image}" width="90px" height="90px" alt="${item.description}" loading="lazy">
    </div>`;
    document.querySelector('#drinks ul').appendChild(liTag);
})

let menuIndex = 0;
let scrollY;

const openModal = () => {
    const body = document.querySelector('body');
    const modal = document.querySelector('aside');
    modal.classList.remove('hidden');
    scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    body.style.left = '0';
    body.style.width = '100%';
}

const closeModal = () => {
    const body = document.querySelector('body');
    const modal = document.querySelector('aside');
    modal.classList.add('hidden');
    scrollY = body.style.top;
    body.style.position = 'relative';
    body.style.top = '';

    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.querySelector('.modal-body h3').innerText = '';
    document.querySelector('.modal-body p').innerText = '';
    document.querySelector('.modal-body h4').innerText = '';
    document.querySelector('.modal-header img').src = '';
    document.querySelector('.modal-header img').alt = '';
}

sections.forEach(section => {
    section.addEventListener('click', (e) => {
        const name = e.target.closest('li').querySelector('h3').getAttribute('data-name');
        const description = e.target.closest('li').querySelector('p').getAttribute('data-description');
        const price = e.target.closest('li').querySelector('h4').getAttribute('data-price');
        const image = e.target.closest('li').querySelector('img').getAttribute('data-src');

        document.querySelector('.modal-body h3').innerText = `${name}`;
        document.querySelector('.modal-body p').innerText = `${description}`;
        document.querySelector('.modal-body h4').innerText = `${price}`;
        document.querySelector('.modal-header img').src = `${image}`;
        document.querySelector('.modal-header img').alt = `${description}`;
        document.querySelector('.close-btn').addEventListener('click', closeModal);

        openModal();
    })
})

window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);

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
})