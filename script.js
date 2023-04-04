function handleLoader() {
    const loader = document.querySelector('.loader');
    loader.innerHTML = `
    <div class="dots"></div>
    `;
    setTimeout(() => {
        loader.classList.remove('visible');
    }, 2000)
}

function handleTabOnClick() {
    const tabs = document.querySelectorAll('#tabs li');
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.remove('active'));
            tabs[i].classList.add('active');
        })
    })
}

function handleTabOnScroll() {
    const sections = document.querySelectorAll('section');
    const tabs = document.querySelectorAll('#tabs li');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 50) {
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

function handleDialogOnClose() {
    const dialog = document.querySelector('dialog');
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
    dialog.classList.remove('expanded');
    dialog.setAttribute('aria-hidden', 'true');
    dialog.querySelector('.dialog-container').innerHTML = '';
}

function handleDialogOnOpen(category, description, image, name, price) {
    const dialog = document.querySelector('dialog');
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    dialog.setAttribute('aria-hidden', 'false');
    dialog.classList.add('expanded');
    dialog.querySelector('.dialog-container').innerHTML += `
    <div class="dialog-header" style="background-image: url('${image}')">
        <button type="button" aria-label="Close menu item" onclick="handleDialogOnClose()"></button>
    </div>
    <div class="dialog-body">
        <h5>${category}</h5>
        <h3>${name}</h3>
        <p>${description}</p>
        <h4>${price}</h4>
    </div>
    `;
}

function createMenu(data) {
    const appetizers = data.filter(item => item.category === 'Appetizers');
    const dishes = data.filter(item => item.category === 'Dishes');
    const breakfast = data.filter(item => item.category === 'Breakfast');
    const desserts = data.filter(item => item.category === 'Desserts');
    const drinks = data.filter(item => item.category === 'Drinks');
    const menu = [appetizers, dishes, breakfast, desserts, drinks];
    const labels = ['appetizers', 'dishes', 'breakfast', 'desserts', 'drinks'];
    const main = document.querySelector('main');
    menu.map((items, i) => {
        const section = document.createElement('section');
        const h2 = document.createElement('h2');
        const ul = document.createElement('ul');
        main.appendChild(section);
        section.appendChild(h2);
        section.appendChild(ul);
        section.setAttribute('id', `${labels[i]}`);
        h2.innerText = `${labels[i]}`;
        ul.classList.add('items');
        ul.innerHTML += items.map(li => {
            const { category, description, id, image, name, price } = li;
            return `
            <li class="item" id="${id}" onclick="handleDialogOnOpen('${category}', '${description}', '${image}', '${name}', '${price}')">
                <div class="item-image">
                    <img src="${image}" alt="${name}" style="aspect-ratio: 16 / 10" loading="lazy" />
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

function createSubLabel() {
    const subLabel = `All Day, Saturdays Only`;
    const section = document.querySelector('#breakfast h2');
    const h3 = document.createElement('h3');
    h3.innerText = `${subLabel}`;
    section.insertAdjacentElement('afterend', h3);
}

async function getData() {
    handleLoader();
    
    const client = contentful.createClient({
        space: 'rmkbw43wse32',
        accessToken: 'LH1A4Pbn5WMso-OgGWFmnBje0LY48PXd3d3rKLEsQ5c'
    })

    try {
        const res = await client.getEntries({ content_type: 'lilBaghdad' });
        const data = await res.items;
        const items = data.map(item => {
            const { category, description, id, name, price } = item.fields;
            const image = item.fields.image.fields.file.url;
            return { category, description, id, image, name, price }
        })
        return items
    } catch {
        document.querySelector('#app').innerHTML = `
        <h1>Ooops! We're having trouble loading the menu</h1>
        `
    }
}

async function initApp() {
    const data = await getData();
    createMenu(data);
    handleTabOnClick();
    createSubLabel();
}

window.addEventListener('scroll', () => {
    handleTabOnScroll()
})

initApp()