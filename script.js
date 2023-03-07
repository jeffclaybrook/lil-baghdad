async function getData() {
    try {
        const res = await fetch('data.json');
        const data = await res.json();
        return data;
    } catch {
        document.querySelector('body').innerHTML = `
        <h5>Ooops! Trouble loading content</h5>
        `;
    }
}

async function createMenu() {
    showLoader();
    const data = await getData();
    const { breakfast, appetizers, dishes, desserts, drinks } = data;
    const main = document.querySelector('main');
    const categories = ['breakfast', 'appetizers', 'dishes', 'desserts', 'drinks'];
    categories.forEach(category => {
        const section = document.createElement('section');
        const title = document.createElement('h2');
        const grid = document.createElement('ul');
        section.setAttribute('id', `${category}`);
        title.innerText = `${category}`;
        grid.classList.add('grid');
        section.appendChild(title);
        section.appendChild(grid);
        main.appendChild(section);
    })
    const sections = [
        document.getElementById('breakfast'),
        document.getElementById('appetizers'),
        document.getElementById('dishes'),
        document.getElementById('desserts'),
        document.getElementById('drinks')
    ];
    const subtitle = document.createElement('h6');
    const parentTitle = sections[0].querySelector('h2');
    subtitle.innerText = `(All day, Saturday only)`;
    parentTitle.after(subtitle);
    breakfast.forEach(item => {
        const { name, description, price, image } = item;
        const li = document.createElement('li');
        sections[0].querySelector('.grid').appendChild(li);
        li.innerHTML = `
        <div class="mdc-card">
            <div class="mdc-card__primary-action">
                <div class="mdc-card__ripple"></div>
                <div class="mdc-card__media mdc-card__media--16-9" style="background-image: url('${image}')" data-image="${image}"></div>
                <div class="mdc-card-wrapper__text-section">
                    <h3 class="mdc-typography mdc-typography--headline6" data-name="${name}">${name}</h3>
                    <p class="mdc-typography mdc-typography--body2" data-description="${description}">${description}</p>
                    <h4 class="mdc-typography mdc-typography--subtitle1" data-price="${price}">${price}</h4>
                </div>
            </div>
        </div>
        `;
    })
    appetizers.forEach(item => {
        const { name, description, price, image } = item;
        const li = document.createElement('li');
        sections[1].querySelector('.grid').appendChild(li);
        li.innerHTML = `
        <div class="mdc-card">
            <div class="mdc-card__primary-action">
                <div class="mdc-card__ripple"></div>
                <div class="mdc-card__media mdc-card__media--16-9" style="background-image: url('${image}')" data-image="${image}"></div>
                <div class="mdc-card-wrapper__text-section">
                    <h3 class="mdc-typography mdc-typography--headline6" data-name="${name}">${name}</h3>
                    <p class="mdc-typography mdc-typography--body2" data-description="${description}">${description}</p>
                    <h4 class="mdc-typography mdc-typography--subtitle1" data-price="${price}">${price}</h4>
                </div>
            </div>
        </div>
        `;
    })
    dishes.forEach(item => {
        const { name, description, price, image } = item;
        const li = document.createElement('li');
        sections[2].querySelector('.grid').appendChild(li);
        li.innerHTML = `
        <div class="mdc-card">
            <div class="mdc-card__primary-action">
                <div class="mdc-card__ripple"></div>
                <div class="mdc-card__media mdc-card__media--16-9" style="background-image: url('${image}')" data-image="${image}"></div>
                <div class="mdc-card-wrapper__text-section">
                    <h3 class="mdc-typography mdc-typography--headline6" data-name="${name}">${name}</h3>
                    <p class="mdc-typography mdc-typography--body2" data-description="${description}">${description}</p>
                    <h4 class="mdc-typography mdc-typography--subtitle1" data-price="${price}">${price}</h4>
                </div>
            </div>
        </div>
        `;
    })
    desserts.forEach(item => {
        const { name, description, price, image } = item;
        const li = document.createElement('li');
        sections[3].querySelector('.grid').appendChild(li);
        li.innerHTML = `
        <div class="mdc-card">
            <div class="mdc-card__primary-action">
                <div class="mdc-card__ripple"></div>
                <div class="mdc-card__media mdc-card__media--16-9" style="background-image: url('${image}')" data-image="${image}"></div>
                <div class="mdc-card-wrapper__text-section">
                    <h3 class="mdc-typography mdc-typography--headline6" data-name="${name}">${name}</h3>
                    <p class="mdc-typography mdc-typography--body2" data-description="${description}">${description}</p>
                    <h4 class="mdc-typography mdc-typography--subtitle1" data-price="${price}">${price}</h4>
                </div>
            </div>
        </div>
        `;
    })
    drinks.forEach(item => {
        const { name, description, price, image } = item;
        const li = document.createElement('li');
        sections[4].querySelector('.grid').appendChild(li);
        li.innerHTML = `
        <div class="mdc-card">
            <div class="mdc-card__primary-action">
                <div class="mdc-card__ripple"></div>
                <div class="mdc-card__media mdc-card__media--16-9" style="background-image: url('${image}')" data-image="${image}"></div>
                <div class="mdc-card-wrapper__text-section">
                    <h3 class="mdc-typography mdc-typography--headline6" data-name="${name}">${name}</h3>
                    <p class="mdc-typography mdc-typography--body2" data-description="${description}">${description}</p>
                    <h4 class="mdc-typography mdc-typography--subtitle1" data-price="${price}">${price}</h4>
                </div>
            </div>
        </div>
        `;
    })
}

createMenu()

function showLoader() {
    const loader = document.querySelector('.loader');
    const app = document.getElementById('app');
    loader.classList.add('visible');
    app.style.opacity = '0';
    loader.innerHTML = `
    <div class="dots"></div>
    <h5>Loading menu...</h5>
    `
    setTimeout(() => {
        loader.classList.remove('visible');
        app.style.opacity = '1';
    }, 2500);
}

function createHeader() {
    const header = document.querySelector('header');
    header.innerHTML = `
    <a href="index.html" aria-label="Home">
        <img src="images/logo.png" alt="Lil Baghdad Iraqi Cuisine" width="146px" height="100px">
    </a>
    `
}

createHeader()

function createTabBar() {
    const nav = document.querySelector('nav');
    const tabBar = document.createElement('div');
    tabBar.classList.add('mdc-tab-bar');
    tabBar.setAttribute('role', 'tablist');
    nav.appendChild(tabBar);
    tabBar.innerHTML = `
    <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll">
            <div class="mdc-tab-scroller__scroll-content">
                <a class="mdc-tab mdc-tab--active breakfast" role="tab" aria-selected="true" tabindex="0" href="#breakfast">
                    <span class="mdc-tab__content">
                        <span class="mdc-tab__text-label">Breakfast</span>
                    </span>
                    <span class="mdc-tab-indicator mdc-tab-indicator--active">
                        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                    </span>
                    <span class="mdc-tab__ripple"></span>
                    <div class="mdc-tab__focus-ring"></div>
                </a>
                <a class="mdc-tab appetizers" role="tab" aria-selected="false" tabindex="-1" href="#appetizers">
                    <span class="mdc-tab__content">
                        <span class="mdc-tab__text-label">Appetizers</span>
                    </span>
                    <span class="mdc-tab-indicator">
                        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                    </span>
                    <span class="mdc-tab__ripple mdc-ripple-upgraded"></span>
                </a>
                <a class="mdc-tab dishes" role="tab" aria-selected="false" tabindex="-1" href="#dishes">
                    <span class="mdc-tab__content">
                        <span class="mdc-tab__text-label">Dishes</span>
                    </span>
                    <span class="mdc-tab-indicator">
                        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                    </span>
                    <span class="mdc-tab__ripple mdc-ripple-upgraded"></span>
                </a>
                <a class="mdc-tab desserts" role="tab" aria-selected="false" tabindex="-1" href="#desserts">
                    <span class="mdc-tab__content">
                        <span class="mdc-tab__text-label">Desserts</span>
                    </span>
                    <span class="mdc-tab-indicator">
                        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                    </span>
                    <span class="mdc-tab__ripple mdc-ripple-upgraded"></span>
                </a>
                <a class="mdc-tab drinks" role="tab" aria-selected="false" tabindex="-1" href="#drinks">
                    <span class="mdc-tab__content">
                        <span class="mdc-tab__text-label">Drinks</span>
                    </span>
                    <span class="mdc-tab-indicator">
                        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                    </span>
                    <span class="mdc-tab__ripple mdc-ripple-upgraded"></span>
                </a>
            </div>
        </div>
    </div>
    `;
    mdc.tabBar.MDCTabBar.attachTo(tabBar);
}

createTabBar()

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

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const tabs = document.querySelectorAll('.mdc-tab');
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop;
        if (window.pageYOffset >= top) {
            current = section.getAttribute('id');
        }
    })
    tabs.forEach(tab => {
        const indicator = tab.querySelector('.mdc-tab-indicator');
        tab.classList.remove('mdc-tab--active');
        indicator.classList.remove('mdc-tab-indicator--active');
        tab.setAttribute('aria-selected', 'false');
        tab.setAttribute('tabindex', '-1');
        if (tab.classList.contains(current)) {
            tab.classList.add('mdc-tab--active');
            tab.setAttribute('aria-selected', 'true');
            tab.setAttribute('tabindex', '0');
            indicator.classList.add('mdc-tab-indicator--active')
        }
    })
})