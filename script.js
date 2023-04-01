const body = document.body;
const dialog = document.querySelector('dialog');
const client = contentful.createClient({
    space: 'rmkbw43wse32',
    accessToken: 'LH1A4Pbn5WMso-OgGWFmnBje0LY48PXd3d3rKLEsQ5c'
})


function createLoader() {
    const loader = document.querySelector('.loader');
    loader.innerHTML = `
    <div class="dots"></div>
    <h5>Loading menu...</h5>
    `;
    setTimeout(() => {
        loader.classList.remove('visible');
    }, 2500);
}


function closeDialog() {
    dialog.classList.remove('expanded');
    dialog.setAttribute('aria-hidden', 'true');
    dialog.querySelector('.dialog-container').innerHTML = '';
    body.style.overflow = 'auto';
}


function openDialog(name, description, price, image) {
    body.style.overflow = 'hidden';
    dialog.setAttribute('aria-hidden', 'false');
    dialog.classList.add('expanded');
    dialog.querySelector('.dialog-container').innerHTML += `
    <div class="dialog-header">
        <img src="${image}" alt="${name}" loading="lazy">
        <button type="button" aria-label="Close menu item" onclick="closeDialog()"></button>
    </div>
    <div class="dialog-body">
        <h3>${name}</h3>
        <p>${description}</p>
        <h4>${price}</h4>
    </div>
    `;
}


function handleTabClick() {
    const tabs = document.querySelectorAll('#tabs li');
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => {
                tab.classList.remove('active');
            })
            tabs[i].classList.add('active');
        })
    })
}


async function createMenu() {
    const data = await getData();

    const categories = [
        breakfast = data.filter(el => el.category == 'Breakfast'),
        appetizers = data.filter(el => el.category == 'Appetizers'),
        dishes = data.filter(el => el.category == 'Dishes'),
        desserts = data.filter(el => el.category == 'Desserts'),
        drinks = data.filter(el => el.category == 'Drinks')
    ]

    const labels = ['Breakfast', 'Appetizers', 'Dishes', 'Desserts', 'Drinks'];
    const subLabel = `All Day, Saturdays Only`;
    const sections = document.querySelectorAll('section');

    sections.forEach((section, i) => {
        const h2 = document.createElement('h2');
        h2.innerText = labels[i];
        section.appendChild(h2);
    })


    const h5 = document.createElement('h5');
    h5.innerText = `${subLabel}`;
    sections[0].appendChild(h5);


    categories.map((category, i) => {
        const ul = document.createElement('ul');
        ul.classList.add('items');
        sections[i].appendChild(ul);
        ul.innerHTML = category.map(li => {
            const { name, description, price, image, id } = li;
            return `
            <li class="item" id="${id}" onclick="openDialog('${name}', '${description}', '${price}', '${image}')">
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


async function getData() {
    createLoader()
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


handleTabClick();


window.onscroll = () => {
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id')
        }
    })

    const tabs = document.querySelectorAll('#tabs li');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.classList.contains(current)) {
            tab.classList.add('active')
        }
    })
}