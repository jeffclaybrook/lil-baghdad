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
        <li class="breakfast active"><a href="#breakfast">Breakfast</a></li>
        <li class="appetizers"><a href="#appetizers">Appetizers</a></li>
        <li class="dishes"><a href="#dishes">Dishes</a></li>
        <li class="desserts"><a href="#desserts">Desserts</a></li>
        <li class="drinks"><a href="#drinks">Drinks</a></li>
    </ul>
    `;
}

createNav()

function createSections() {
    const main = document.querySelector('main');
    const labels = ['breakfast', 'appetizers', 'dishes', 'desserts', 'drinks'];
    labels.forEach(label => {
        const section = document.createElement('section');
        main.appendChild(section);
        section.setAttribute('id', `${label}`);
        section.innerHTML = `
        <h2>${label}</h2>
        <ul></ul>
        `;
    })
}

createSections()

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

function showLoader() {
    const app = document.getElementById('app');
    const loader = document.querySelector('.loader');
    loader.classList.add('show');
    app.style.opacity = 0;
    setTimeout(() => {
        loader.classList.remove('show')
        app.style.opacity = 100
    }, 2500)
}

const breakfastUl = document.querySelector('#breakfast ul');
const appetizersUl = document.querySelector('#appetizers ul');
const dishesUl = document.querySelector('#dishes ul');
const dessertsUl = document.querySelector('#desserts ul');
const drinksUl = document.querySelector('#drinks ul');
const ulTags = [breakfastUl, appetizersUl, dishesUl, dessertsUl, drinksUl];

async function getData() {
    showLoader()
    try {
        const res = await fetch('data.json');
        const data = await res.json();
        const { breakfast, appetizers, dishes, desserts, drinks } = data;
        breakfast.forEach(item => {
            const { name, description, price, image } = item;
            const liTag = document.createElement('li');
            liTag.classList.add('item');
            liTag.innerHTML = `
            <img data-image="${image}" src="${image}" alt="${name}" loading="lazy">
            <div class="item-details">
                <h3 data-name="${name}">${name}</h3>
                <p data-description="${description}">${description}</p>
                <h4 data-price="${price}">${price}</h4>
            </div>
            `;
            breakfastUl.appendChild(liTag);
        })
        appetizers.forEach(item => {
            const { name, description, price, image } = item;
            const liTag = document.createElement('li');
            liTag.classList.add('item');
            liTag.innerHTML = `
            <img data-image="${image}" src="${image}" alt="${name}" loading="lazy">
            <div class="item-details">
                <h3 data-name="${name}">${name}</h3>
                <p data-description="${description}">${description}</p>
                <h4 data-price="${price}">${price}</h4>
            </div>
            `;
            appetizersUl.appendChild(liTag)
        })
        dishes.forEach(item => {
            const { name, description, price, image } = item;
            const liTag = document.createElement('li');
            liTag.classList.add('item');
            liTag.innerHTML = `
            <img data-image="${image}" src="${image}" alt="${name}" loading="lazy">
            <div class="item-details">
                <h3 data-name="${name}">${name}</h3>
                <p data-description="${description}">${description}</p>
                <h4 data-price="${price}">${price}</h4>
            </div>
            `;
            dishesUl.appendChild(liTag)
        })
        desserts.forEach(item => {
            const { name, description, price, image } = item;
            const liTag = document.createElement('li');
            liTag.classList.add('item');
            liTag.innerHTML = `
            <img data-image="${image}" src="${image}" alt="${name}" loading="lazy">
            <div class="item-details">
                <h3 data-name="${name}">${name}</h3>
                <p data-description="${description}">${description}</p>
                <h4 data-price="${price}">${price}</h4>
            </div>
            `;
            dessertsUl.appendChild(liTag)
        })
        drinks.forEach(item => {
            const { name, description, price, image } = item;
            const liTag = document.createElement('li');
            liTag.classList.add('item');
            liTag.innerHTML = `
            <img data-image="${image}" src="${image}" alt="${name}" loading="lazy">
            <div class="item-details">
                <h3 data-name="${name}">${name}</h3>
                <p data-description="${description}">${description}</p>
                <h4 data-price="${price}">${price}</h4>
            </div>
            `;
            drinksUl.appendChild(liTag)
        })
    } catch {
        const app = document.getElementById('app');
        app.innerHTML = `<h1>Oops! We're having trouble loading menu items</h1>`;
    }
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

const tabs = document.querySelectorAll('nav li');
tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tabs[i].classList.add('active');
    })
})

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
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
})