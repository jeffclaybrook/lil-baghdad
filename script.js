const app = document.getElementById('app');

const createApp = () => {
    app.innerHTML = `
    <header>
        <div class="header-inner">
            <img src="images/logo.png" alt="Lil Baghdad" width="146px" height="100px">
        </div>
    </header>
    <nav>
        <ul id="tabs">
            <li class="active"><a href="#breakfast">Breakfast</a></li>
            <li><a href="#appetizers">Appetizers</a></li>
            <li><a href="#dishes">Dishes</a></li>
            <li><a href="#desserts">Desserts</a></li>
            <li><a href="#drinks">Drinks</a></li>
        </ul>
    </nav>
    <main>
        <section id="breakfast"></section>
        <section id="appetizers"></section>
        <section id="dishes"></section>
        <section id="desserts"></section>
        <section id="drinks"></section>
    </main>
    <footer>
        <div class="footer-inner">
            <a href="index.html" aria-label="Lil Baghdad">
                <img src="images/logo.png" width="180px" height="123px" alt="Lil Baghdad Iraqi Cuisine" loading="lazy">
            </a>
            <ul>
                <li><a href="https://www.facebook.com/profile.php?id=100074970285412/" target="_blank" aria-label="Lil Baghdad Facebook"></a></li>
                <li><a href="https://www.instagram.com/desireddishes/" target="_blank" aria-label="Lil Baghdad Instagram"></a></li>
                <li><a href="https://maps.app.goo.gl/xj666i6ocinxPxfS9" target="_blank" aria-label="Lil Baghdad Google"></a></li>
                <li><a href="tel:(512)-300-9655" aria-label="Lil Baghdad Phone number"></a></li>
            </ul>
            <p>© 2023 Jeffrey Claybrook</p>
        </div>
    </footer>
    `
}

const createLoader = () => {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loader.classList.add('visible');
    app.insertAdjacentElement('beforebegin', loader);
    app.style.opacity = 0;
    app.style.visibility = 'hidden';
    loader.innerHTML = `
    <div class="dots"></div>
    <h5>Loading menu...</h5>
    `;
    setTimeout(() => {
        loader.classList.remove('visible');
        app.style.opacity = 1;
        app.style.visibility = 'visible';
        loader.remove();
    }, 2500);
}

const createModal = () => {
    const dialog = document.createElement('dialog');
    app.insertAdjacentElement('afterend', dialog);
}

const closeModal = () => {
    const dialog = document.querySelector('dialog');
    const body = document.querySelector('body');
    body.style.position = 'relative';
    dialog.classList.remove('visible');
    dialog.innerHTML = '';
}

const showModal = () => {
    const dialog = document.querySelector('dialog');
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', e => {
            const body = document.querySelector('body');
            const el = e.target.closest('li');
            const image = el.querySelector('img').src;
            const name = el.querySelector('h3').innerText;
            const description = el.querySelector('p').innerText;
            const price = el.querySelector('h4').innerText;
            dialog.classList.add('visible');
            body.style.position = 'fixed';
            body.style.width = '100%';
            dialog.innerHTML = `
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
            `
        })
    })
}

const client = contentful.createClient({
    space: 'rmkbw43wse32',
    accessToken: 'LH1A4Pbn5WMso-OgGWFmnBje0LY48PXd3d3rKLEsQ5c'
})

const getData = async () => {
    createLoader()
    createApp()
    createModal()
    try {
        const res = await client.getEntries({ content_type: 'lilBaghdad' });
        const data = await res.items;
        const items = data.map(item => {
            const { name, description, price, category, id } = item.fields;
            const image = item.fields.image.fields.file.url;
            return { name, description, price, category, image, id };
        })
        return items;
    } catch {
        app.innerHTML = `
        <h2>Ooops! We're having trouble loading this page</h2>
        `
    }
}

const createMenu = async () => {
    const data = await getData();

    const categories = [
        breakfast = data.filter(el => el.category == 'Breakfast'),
        appetizers = data.filter(el => el.category == 'Appetizers'),
        dishes = data.filter(el => el.category == 'Dishes'),
        desserts = data.filter(el => el.category == 'Desserts'),
        drinks = data.filter(el => el.category == 'Drinks')
    ]

    const labels = ['Breakfast', 'Appetizers', 'Dishes', 'Desserts', 'Drinks'];
    const sections = document.querySelectorAll('section');

    sections.forEach((section, i) => {
        const h2 = document.createElement('h2');
        h2.innerText = labels[i];
        section.appendChild(h2);
    })

    categories.map((category, i) => {
        const ul = document.createElement('ul');
        ul.classList.add('items');
        sections[i].appendChild(ul);
        ul.innerHTML = category.map(li => {
            const { name, description, price, image, id } = li;
            return `
            <li class="item" data-id="${id}" onclick="showModal()">
                <div class="item-image">
                    <img src="${image}" alt="${name}" style="aspect-ratio: 16 / 9" loading="lazy" />
                </div>
                <div class="item-details">
                    <h3>${name}</h3>
                    <p>${description}</p>
                    <h4>${price}</h4>
                </div>
            </li>
            `
        }).join('')
    })
}

createMenu()

const tabNav = () => {
    const tabs = document.querySelectorAll('#tabs li');
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => {
                tab.classList.remove('active')
            })
            tabs[i].classList.add('active')
        })
    })
}

tabNav()