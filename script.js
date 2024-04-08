function createNav() {
 const categories = getCategories()
 const nav = document.querySelector('nav')
 const ul = document.createElement('ul')
 categories.forEach(category => {
  const id = category.toLowerCase()
  const li = document.createElement('li')
  li.innerHTML = `
  <a href="#${id}" class="${id}">${category}</a>
  `
  ul.appendChild(li)
  nav.appendChild(ul)
 })
 handleTabClick();
}

function handleTabClick() {
 const tabs = document.querySelectorAll('nav a')
 tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
   tabs.forEach(tab => tab.classList.remove('active'))
   tabs[i].classList.add('active')
  })
 })
}

function handlePageScroll() {
 const articles = document.querySelectorAll('article')
 const tabs = document.querySelectorAll('nav a')
 let current = ''
 articles.forEach(article => {
  const top = article.offsetTop
  if (window.pageYOffset >= top - 50) {
   current = article.getAttribute('id')
  }
 })
 tabs.forEach(tab => {
  tab.classList.remove('active')
  if (tab.classList.contains(current)) {
   tab.classList.add('active')
  }
 })
}

function getCategories() {
 const categories = [
  'Appetizers',
  'Dishes',
  'Curry',
  'Breakfast',
  'Desserts',
  'Drinks'
 ]
 return categories
}

function sortCategories(data) {
 const categoryNames = getCategories(data)
 const categories = data.map(item => {
  const { name, category, description, price, image } = item
  return { name, category, description, price, image }
 })
 const categoryData = []
 categoryNames.forEach((category, i) => {
  category = categories.filter(item => item.category === categoryNames[i])
  categoryData.push(category)
 })
 return categoryData
}

function createSections() {
 const categories = getCategories()
 const articles = document.querySelectorAll('article')
 articles.forEach((article, i) => {
  const h2 = document.createElement('h2')
  const ul = document.createElement('ul')
  h2.innerText = categories[i]
  article.appendChild(h2)
  article.appendChild(ul)
 })
 const subHeadings = [
  'Served with side of pita bread',
  'Served with a side of basmati rice',
  'Served all day, Saturdays only'
 ]
 const headings = [
  document.querySelector('#dishes h2'),
  document.querySelector('#curry h2'),
  document.querySelector('#breakfast h2')
 ]
 headings.forEach((heading, i) => {
  const h3 = document.createElement('h3')
  h3.innerText = subHeadings[i]
  heading.insertAdjacentElement('afterend', h3)
 })
}

function createMenu(data) {
 const metadata = sortCategories(data)
 const ul = document.querySelectorAll('article ul')
 metadata.map((items, i) => {
  ul[i].innerHTML += items.map(item => {
   const { name, category, description, price, image } = item
   const priceAlt = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
   })
   const imageAlt = `https:${image}`
   return `
   <li onclick='createDialog("${name}", "${category}", "${description}", "${priceAlt}", "${imageAlt}")'>
    <div class="item-image">
     <img src="${imageAlt}" alt="${name}" loading="lazy" />
    </div>
    <div class="item-details">
     <h3>${name}</h3>
     <p>${description}</p>
     <h4>$${priceAlt}</h4>
    </div>
   </li>
   `
  }).join('')
 })
 setDisabledItems()
}

function setDisabledItems() {
 const items = document.querySelectorAll('#breakfast li')
 const date = new Date()
 if (date.getDay() != 6) {
  items.forEach(item => {
   item.classList.add('disabled')
  })
 } else if (date.getDay() === 6) {
  items.forEach(item => {
   item.classList.remove('disabled')
  })
 }
}

function createDialog(name, category, description, priceAlt, imageAlt) {
 const body = document.querySelector('body')
 const dialog = document.querySelector('dialog')
 body.style.overflow = 'hidden'
 dialog.classList.add('expanded')
 dialog.setAttribute('aria-hidden', 'false')
 dialog.innerHTML += `
 <div class="dialog-scrim"></div>
 <div class="dialog-content">
  <div class="dialog-header" style="background-image: url('${imageAlt}')">
   <button aria-label="Close dialog" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20" fill="#292a2d">
     <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
    </svg>
   </button>
  </div>
  <div class="dialog-body">
   <h5>${category}</h5>
   <h3>${name}</h3>
   <p>${description}</p>
   <h4>$${priceAlt}</h4>
  </div>
 </div>
 `
 const button = dialog.querySelector('button')
 button.addEventListener('click', closeDialog)
}

function closeDialog() {
 const body = document.querySelector('body')
 const dialog = document.querySelector('dialog')
 body.style.overflow = 'auto'
 dialog.classList.remove('expanded')
 dialog.setAttribute('aria-hidden', 'true')
 dialog.innerHTML = ''
}

async function getData() {
 const client = contentful.createClient({
  space: 'rmkbw43wse32',
  environment: 'master',
  accessToken: 'oXRYrwKTAAEwHcxPpDjeqyQLw5hKeb1mX8w9XZULXKE'
 })
 const res = await client.getEntries({
  content_type: 'lilBaghdad'
 })
 const data = await res.items
 const items = data.map(item => {
  const { name, category, description, price } = item.fields
  const image = item.fields.image.fields.file.url
  return { name, category, description, price, image }
 })
 return items
}

async function initApp() {
 try {
  const data = await getData()
  createNav()
  createSections()
  createMenu(data)
 } catch (error) {
  console.log('Error fetching items', error)
  document.querySelector('body').innerHTML = `
  <h1>Ooops! We're having trouble loading menu items</h1>
  `
 }
}

initApp()

window.addEventListener('scroll', handlePageScroll)