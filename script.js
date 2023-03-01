function createHeader() {
    const header = document.querySelector('header');
    header.innerHTML = `
    <div class="header-inner">
        <a href="index.html" class="image-wrapper" aria-label="Lil Baghdad home">
            <img src="images/logo.png" width="180px" height="123px" alt="Lil Baghdad Iraqi Cuisine">
        </a>
    </div>
    `;
}

createHeader()

function createNav() {
    const nav = document.querySelector('nav');
    nav.innerHTML = `
    <ul>
        <li class="appetizers active"><a href="#appetizers">Appetizers</a></li>
        <li class="dishes"><a href="#dishes">Dishes</a></li>
        <li class="desserts"><a href="#desserts">Desserts</a></li>
        <li class="drinks"><a href="#drinks">Drinks</a></li>
    </ul>
    `;
}

createNav()

function createSections() {
    const main = document.querySelector('main');
    main.innerHTML = `
    <section id="appetizers"></section>
    <section id="dishes"></section>
    <section id="desserts"></section>
    <section id="drinks"></section>
    `
}

createSections();

function createFooter() {
    const footer = document.querySelector('footer');
    footer.innerHTML = `
    <div class="footer-inner">
        <a href="index.html" class="image-wrapper" aria-label="Lil Baghdad home">
            <img src="images/logo.png" width="180px" height="123px" alt="Lil Baghdad Iraqi Cuisine" loading="lazy">
        </a>
        <ul>
            <li><a href="https://www.facebook.com/profile.php?id=100074970285412/" target="_blank" aria-label="Lil Baghdad Facebook"></a></li>
            <li><a href="https://www.instagram.com/desireddishes/" target="_blank" aria-label="Lil Baghdad Instagram"></a></li>
            <li><a href="https://maps.app.goo.gl/xj666i6ocinxPxfS9" target="_blank" aria-label="Lil Baghdad Google"></a></li>
            <li><a href="tel:(512)-300-9655" aria-label="Lil Baghdad Phone number"></a></li>
        </ul>
        <p>&copy; 2023 Jeffrey Claybrook</p>
    </div>
    `;
}

createFooter()

async function getData() {
    try {
        const res = await fetch('data.json');
        const data = await res.json();
        const { appetizers, dishes, desserts, drinks } = data.items;
        displayAppetizers(appetizers);
        displayDishes(dishes);
        displayDesserts(desserts);
        displayDrinks(drinks);
    } catch {
        const body = document.querySelector('body');
        body.innerHTML = `<h1>Oops! We're having trouble loading menu items</h1>`;
    }
}

function displayAppetizers(appetizers) {
    const section = document.getElementById('appetizers');
    const appetizersList = appetizers.map(appetizer => {
        const { name, description, price, image } = appetizer;
        return `
        <li class="item">
            <img data-image="${image}" src="${image}" alt="${name}" loading="lazy">
            <div class="item-details">
                <h3 data-name="${name}">${name}</h3>
                <p data-description="${description}">${description}</p>
                <h4 data-price="${price}">${price}</h4>
            </div>
        </li>
        `;
    }).join('');
    section.innerHTML = `<h2>Appetizers</h2><ul>${appetizersList}</ul>`;
}

function displayDishes(dishes) {
    const section = document.getElementById('dishes');
    const dishesList = dishes.map(dish => {
        const { name, description, price, image } = dish;
        return `
        <li class="item">
            <img data-image="${image}" src="${image}" alt="${name}" loading="lazy">
            <div class="item-details">
                <h3 data-name="${name}">${name}</h3>
                <p data-description="${description}">${description}</p>
                <h4 data-price="${price}">${price}</h4>
            </div>
        </li>
        `;
    }).join('');
    section.innerHTML = `<h2>Dishes</h2><ul>${dishesList}</ul>`;
}

function displayDesserts(desserts) {
    const section = document.getElementById('desserts');
    const dessertsList = desserts.map(dessert => {
        const { name, description, price, image } = dessert;
        return `
        <li class="item">
            <img data-image="${image}" src="${image}" alt="${name}" loading="lazy">
            <div class="item-details">
                <h3 data-name="${name}">${name}</h3>
                <p data-description="${description}">${description}</p>
                <h4 data-price="${price}">${price}</h4>
            </div>
        </li>
        `;
    }).join('');
    section.innerHTML = `<h2>Desserts</h2><ul>${dessertsList}</ul>`;
}

function displayDrinks(drinks) {
    const section = document.getElementById('drinks');
    const drinksList = drinks.map(drink => {
        const { name, description, price, image } = drink;
        return `
        <li class="item">
            <img data-image="${image}" src="${image}" alt="${name}" loading="lazy">
            <div class="item-details">
                <h3 data-name="${name}">${name}</h3>
                <p data-description="${description}">${description}</p>
                <h4 data-price="${price}">${price}</h4>
            </div>
        </li>
        `;
    }).join('');
    section.innerHTML = `<h2>Drinks</h2><ul>${drinksList}</ul>`;
}

getData()

function createAside() {
    const aside = document.querySelector('aside');
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', e => {
            const name = e.target.closest('li').querySelector('h3').getAttribute('data-name');
            const description = e.target.closest('li').querySelector('p').getAttribute('data-description');
            const price = e.target.closest('li').querySelector('h4').getAttribute('data-price');
            const image = e.target.closest('li').querySelector('img').getAttribute('data-image');
            aside.classList.add('visible');
            aside.innerHTML = `
            <div class="modal-inner">
                <div class="modal-header">
                    <img src="${image}" alt="${name}" loading="lazy">
                    <button type="button" aria-label="Close modal window" onclick="closeModal()"></button>
                </div>
                <div class="modal-body">
                    <h3>${name}</h3>
                    <p>${description}</p>
                    <h4>${price}</h4>
                </div>
            </div>
            `;
        })
    })
}

createAside()

function closeModal() {
    const aside = document.querySelector('aside');
    aside.classList.remove('visible');
    aside.innerHTML = '';
}

window.onscroll = () => {
    const sections = document.querySelectorAll('section');
    const tabs = document.querySelectorAll('nav li');
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop;
        if (window.pageYOffset >= top - 60) {
            current = section.getAttribute('id');
        }
    })
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.classList.contains(current)) {
            tab.classList.add('active');
        }
    })
}

const tabs = document.querySelectorAll('nav li');
tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tabs[i].classList.add('active');
    })
})