const menu = [
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
    },
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
    },
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
    },
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
        description: "Rose flavored and sweet Pomegranate cold beverage.",
        price: "$2.00",
        image: "drink-3.jpeg"
    }
]

let appetizers = [];
for (let i = 0; i < menu.length - 17; i++) {
    appetizers.push(menu[i]);
}

let dishes = [];
for (let i = 7; i < menu.length - 5; i++) {
    dishes.push(menu[i]);
}

let desserts = [];
for (let i = 19; i < menu.length - 3; i++) {
    desserts.push(menu[i]);
}

let drinks = [];
for (let i = 21; i < menu.length; i++) {
    drinks.push(menu[i]);
}

let menuIndex = 0;

function createSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const title = document.createElement('h2');
        const ulTag = document.createElement('ul');
        title.innerText = section.getAttribute('id');
        section.appendChild(title);
        section.appendChild(ulTag);
    })
}

function populateSections() {
    appetizers.forEach(appetizer => {
        const ulTag = document.querySelector('#appetizers ul');
        const liTag = document.createElement('li');
        liTag.classList.add('item');
        liTag.innerHTML = `
        <div class="item-details">
            <h3 data-name="${appetizer.name}">${appetizer.name}</h3>
            <p data-description="${appetizer.description}">${appetizer.description}</p>
            <h4 data-price="${appetizer.price}">${appetizer.price}</h4>
        </div>
        <div class="item-image">
            <img src="images/${appetizer.image}" alt="${appetizer.name}" loading="lazy">
        </div>
        `;
        ulTag.appendChild(liTag);
    })

    dishes.forEach(dish => {
        const ulTag = document.querySelector('#dishes ul');
        const liTag = document.createElement('li');
        liTag.classList.add('item');
        liTag.innerHTML = `
        <div class="item-details">
            <h3 data-name="${dish.name}">${dish.name}</h3>
            <p data-description="${dish.description}">${dish.description}</p>
            <h4 data-price="${dish.price}">${dish.price}</h4>
        </div>
        <div class="item-image">
            <img src="images/${dish.image}" alt="${dish.name}" loading="lazy">
        </div>
        `;
        ulTag.appendChild(liTag);
    })

    desserts.forEach(dessert => {
        const ulTag = document.querySelector('#desserts ul');
        const liTag = document.createElement('li');
        liTag.classList.add('item');
        liTag.innerHTML = `
        <div class="item-details">
            <h3 data-name="${dessert.name}">${dessert.name}</h3>
            <p data-description="${dessert.description}">${dessert.description}</p>
            <h4 data-price="${dessert.price}">${dessert.price}</h4>
        </div>
        <div class="item-image">
            <img src="images/${dessert.image}" alt="${dessert.name}" loading="lazy">
        </div>
        `;
        ulTag.appendChild(liTag);
    })

    drinks.forEach(drink => {
        const ulTag = document.querySelector('#drinks ul');
        const liTag = document.createElement('li');
        liTag.classList.add('item');
        liTag.innerHTML = `
        <div class="item-details">
            <h3 data-name="${drink.name}">${drink.name}</h3>
            <p data-description="${drink.description}">${drink.description}</p>
            <h4 data-price="${drink.price}">${drink.price}</h4>
        </div>
        <div class="item-image">
            <img src="images/${drink.image}" alt="${drink.name}" loading="lazy">
        </div>
        `;
        ulTag.appendChild(liTag);
    })

    const items = document.querySelectorAll('.item');
    items.forEach((item, index) => {
        item.setAttribute('data-index', `${index}`)
    })
}

let scrollY;

function openModal() {
    const body = document.body;
    const modal = document.querySelector('aside');
    modal.classList.remove('hidden');
    scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    body.style.left = '0';
    body.style.width = '100%';
}

function closeModal() {
    const body = document.body;
    const modal = document.querySelector('aside');
    modal.classList.add('hidden');
    scrollY = body.style.top;
    body.style.position = 'relative';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
})

const main = document.querySelector('main');

main.addEventListener('click', (e) => {
    const modal = document.querySelector('aside');
    menuIndex = e.target.closest('li').getAttribute('data-index');
    const name = e.target.closest('li').querySelector('h3').getAttribute('data-name');
    const description = e.target.closest('li').querySelector('p').getAttribute('data-description');
    const price = e.target.closest('li').querySelector('h4').getAttribute('data-price');
    const image = e.target.closest('li').querySelector('img').getAttribute('src');
    openModal();
    modal.innerHTML = `
    <div class="modal-inner">
        <div class="modal-header">
            <img src="${image}" alt="${name}">
            <button class="close-btn" onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="modal-body">
            <h3>${name}</h3>
            <p>${description}</p>
            <h4>${price}</h4>
        </div>
    </div>
    `;
})

const tabs = document.querySelectorAll('nav li');
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tabs[index].classList.add('active');
    })
})

window.addEventListener('DOMContentLoaded', () => {
    createSections();
    populateSections();
})

window.onscroll = () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    })

    const tabs = document.querySelectorAll('nav li');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.classList.contains(current)) {
            tab.classList.add('active');
        }
    })
}
