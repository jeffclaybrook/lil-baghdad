function createLoader() {
    const loader = document.querySelector('.loader');
    loader.innerHTML = `
    <img src="images/logo.png" alt="Lil Baghdad" width="146px" height="100px">
    <div class="dots"></div>
    `;
    setTimeout(() => {
        loader.classList.remove('visible');
        loader.innerHTML = '';
    }, 2000);
}

function closeModal() {
    const body = document.querySelector('body');
    const dialog = document.querySelector('dialog');
    body.style.overflow = 'auto';
    dialog.classList.remove('expanded');
    dialog.setAttribute('aria-hidden', 'true');
    dialog.innerHTML = '';
}

function createModal(image, category, name, description, price) {
    const body = document.querySelector('body');
    const dialog = document.querySelector('dialog');
    body.style.overflow = 'hidden';
    dialog.classList.add('expanded');
    dialog.setAttribute('aria-hidden', 'false');
    dialog.innerHTML += `
    <div class="dialog-scrim"></div>
    <div class="dialog-container">
        <div class="dialog-header" style="background-image: url('${image}')">
            <button type="button" aria-label="Close menu item" onclick="closeModal()"></button>
        </div>
        <div class="dialog-body">
            <h5>${category}</h5>
            <h3>${name}</h3>
            <p>${description}</p>
            <h4>${price}</h4>
        </div>
    </div>
    `;
}

function handleTabClick() {
    const tabs = document.querySelectorAll('#tabs li');
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.remove('active'));
            tabs[i].classList.add('active');
        })
    })
}

function handlePageScroll() {
    const sections = document.querySelectorAll('section');
    const tabs = document.querySelectorAll('#tabs li');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 50) {
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

function createCategories(data) {
    const appetizers = data.filter(item => item.category === 'Appetizers');
    const dishes = data.filter(item => item.category === 'Dishes');
    const breakfast = data.filter(item => item.category === 'Breakfast');
    const desserts = data.filter(item => item.category === 'Desserts');
    const drinks = data.filter(item => item.category === 'Drinks');
    return [appetizers, dishes, breakfast, desserts, drinks];
}

function createSections() {
    const labels = ['Appetizers', 'Dishes', 'Breakfast', 'Desserts', 'Drinks'];
    const subLabel = `All Day, Saturdays Only`;
    const sections = document.querySelectorAll('section');
    sections.forEach((section, i) => {
        const h2 = document.createElement('h2');
        const ul = document.createElement('ul');
        h2.innerText = labels[i];
        ul.classList.add('items');
        section.appendChild(h2);
        section.appendChild(ul);
    })
    const h2 = sections[2].querySelector('h2');
    const h5 = document.createElement('h5');
    h5.innerText = subLabel;
    h2.insertAdjacentElement('afterend', h5);
}

function createItems(data) {
    const categories = createCategories(data);
    const ul = document.querySelectorAll('section ul');
    categories.map((items, i) => {
        ul[i].innerHTML += items.map(li => {
            const { image, category, name, description, price } = li;
            return `
            <li class="item" onclick="createModal('${image}', '${category}', '${name}', '${description}', '${price}')">
                <div class="item-image">
                    <img src="${image}" alt="${name}" style="aspect-ratio: 16 / 10">
                </div>
                <div class="item-details">
                    <h3>${name}</h3>
                    <p>${description}</p>
                    <h4>${price}</h4>
                </div>
            </li>
            `
        }).join('');
    })
}

async function getData() {
    createLoader();
    const client = contentful.createClient({
        space: 'rmkbw43wse32',
        accessToken: 'LH1A4Pbn5WMso-OgGWFmnBje0LY48PXd3d3rKLEsQ5c'
    })
    try {
        const res = await client.getEntries({ content_type: 'lilBaghdad' });
        const data = await res.items;
        const items = data.map(item => {
            const { category, description, name, price } = item.fields;
            const image = item.fields.image.fields.file.url;
            return { category, description, name, price, image };
        })
        return items;
    } catch {
        document.querySelector('#app').innerHTML = `
        <h1>Ooops! We're having trouble loading the menu</h1>
        `
    }
}

async function initApp() {
    const data = await getData();
    handleTabClick();
    createSections();
    createItems(data);
}

initApp()

window.addEventListener('scroll', () => {
    handlePageScroll();
})

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
       navigator.serviceWorker
       .register('serviceWorker.js')
       .then(res => console.log('Service worker registered', res))
       .catch(err => console.log('Service worker failed to register', err))
    })
}