function createLoader() {
    const loader = document.querySelector('aside');
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
            <button type="button" aria-label="Close menu item" onclick="closeModal()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16" fill="#292a2d"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </button>
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
    const articles = document.querySelectorAll('article');
    const tabs = document.querySelectorAll('#tabs li');
    let current = '';
    articles.forEach(article => {
        const articleTop = article.offsetTop;
        if (window.pageYOffset >= articleTop - 50) {
            current = article.getAttribute('id');
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
    const articles = document.querySelectorAll('article');
    articles.forEach((article, i) => {
        const h2 = document.createElement('h2');
        const ul = document.createElement('ul');
        h2.innerText = labels[i];
        ul.classList.add('items');
        article.appendChild(h2);
        article.appendChild(ul);
    })
    const h2 = articles[2].querySelector('h2');
    const h3 = document.createElement('h3');
    h3.innerText = subLabel;
    h2.insertAdjacentElement('afterend', h3);
}

function createItems(data) {
    const categories = createCategories(data);
    const ul = document.querySelectorAll('article ul');
    categories.map((items, i) => {
        ul[i].innerHTML += items.map(li => {
            const { image, category, name, description, price } = li;
            return `
            <li class="item" onclick="createModal('${image}', '${category}', '${name}', '${description}', '${price}')">
                <div class="item-image">
                    <img src="${image}" alt="${name}" style="aspect-ratio: 16 / 10" loading="lazy">
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
        document.querySelector('main').innerHTML = `
        <h1>Ooops! We're having trouble loading the menu</h1>
        `
    }
}

async function initApp() {
    createLoader();
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
    })
}