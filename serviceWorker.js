const staticLilBaghdad = 'lil-baghdad-site-v1';
const assets = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/images/logo.png',
    '/images/favicon.ico',
    '/images/icon-72x72.png',
    '/images/icon-144x144.png',
    '/images/icon-180x180.png',
    '/images/icon-192x192.png',
    '/images/icon-512x512.png',
    'https://images.ctfassets.net/rmkbw43wse32/7vHDStX66sFlyBG3zGN4yy/de4a5a535c3cf626cc1ba595b868e566/appetizer-8.webp',
    'https://images.ctfassets.net/rmkbw43wse32/3nqOM6BbLm032QdCjbfM9R/dea5cbd5c7731b1181a61abb1c34cfa5/appetizer-11.webp',
    'https://images.ctfassets.net/rmkbw43wse32/1Mx62N0otgAKKNYasqshdc/c199a39ff5c3ff771a0da894250566ab/appetizer-7.webp',
    'https://images.ctfassets.net/rmkbw43wse32/1gt6mvBaA2agAxFi8PJcYr/ce5df7a65f65a12d7a89a842898ce096/appetizer-6.webp',
    'https://images.ctfassets.net/rmkbw43wse32/4pGir7fFPEC4zpxglq1c9z/850fda9066a33fa42c968a4fc5021e47/appetizer-9.webp',
    'https://images.ctfassets.net/rmkbw43wse32/3WEnqxV2Jy3zhvSbW7xYLi/9863bdf2f911a0ab4c3c84d0a77bd9a4/appetizer-3.webp',
    'https://images.ctfassets.net/rmkbw43wse32/3UX4yzl8TN6XddEM2pbtVK/cf95d7b6e8505cc78256f4653797046c/appetizer-10.webp',
    'https://images.ctfassets.net/rmkbw43wse32/2XefJQ4Vxtc5xiiQSEJx7j/67f27551cc89730afa8061ae59f0307f/appetizer-2.webp',
    'https://images.ctfassets.net/rmkbw43wse32/7x6hL4UXpTBl0I6yx1P6sc/712688d9374e7d85708f98b19e6789f1/appetizer-5.webp',
    'https://images.ctfassets.net/rmkbw43wse32/4aWd86mqZP3MbYj4tU1G9Q/61481f022e3ae1477b43eacddb156af5/appetizer-4.webp',
    'https://images.ctfassets.net/rmkbw43wse32/4XUnTkhmUdoK6kZFP30LzV/90ab8b682aeaf81da0381cfbf8445cea/appetizer-1.webp',
    'https://images.ctfassets.net/rmkbw43wse32/22SxO4F5ZD78iQO5yXIx4K/f9a6653c71d9d0d82728acfa6d7cb57a/dish-19.webp',
    'https://images.ctfassets.net/rmkbw43wse32/7oZfrv1LhNfQxnS9Gy9j62/a01ac46372d302d98f0de0b67ee25c7b/dish-18.webp',
    'https://images.ctfassets.net/rmkbw43wse32/zFcqfBIxWFVhfwuPgGL5R/ff5e835b5cbe34939818fa1b6ee04528/dish-12.webp',
    'https://images.ctfassets.net/rmkbw43wse32/3zhtm4lqYWNO06NNg1XtiT/b7f17262803e01a221ce025cbc4a71b9/dish-7.webp',
    'https://images.ctfassets.net/rmkbw43wse32/5gj05jD4H8PcOpbPyAzosL/f75d44a36e074621166335851e11459d/dish-14.webp',
    'https://images.ctfassets.net/rmkbw43wse32/4l4mHgvJR7fnyQsJ6X5OT4/d1d29dceb55989429fcccfdf3a7d4cd3/dish-15.webp',
    'https://images.ctfassets.net/rmkbw43wse32/WuoVK3RP1zIbvGofFOtyr/8dbe1927cb18573a563b92088fb40547/dish-17.webp',
    'https://images.ctfassets.net/rmkbw43wse32/2LcfdVtddvMHzK88J6k4b8/e62c7fd8bd9d1c489a74c7c4f3d1db52/dish-9.webp',
    'https://images.ctfassets.net/rmkbw43wse32/ANfY2bLEWPXsokp9HJJJm/1341b1b2b3ac779d5b5d022bacb45722/dish-8.webp',
    'https://images.ctfassets.net/rmkbw43wse32/1s15bVLawb1arNMwPWg7TH/2890ca3d04ee622ea8b1b7169583a506/dish-1.webp',
    'https://images.ctfassets.net/rmkbw43wse32/1wKQFvQhwcfB9WJt2HraxC/4c5e68fadf93ccaa4c06fc16ae8c1218/dish-13.webp',
    'https://images.ctfassets.net/rmkbw43wse32/5k3XKi8cW1yE0vz1P7gV43/12e2b3eccaf3e281ef9efd22bc3333fc/dish-10.webp',
    'https://images.ctfassets.net/rmkbw43wse32/3SqaksrFp1q9X4czNv4WHh/32ea1778bcde81685058ed18da643800/dish-16.webp',
    'https://images.ctfassets.net/rmkbw43wse32/2YBrVfmAKwUKqbUCbryyBA/f496e857dfbe5be553b334c25cbe752c/dish-3.webp',
    'https://images.ctfassets.net/rmkbw43wse32/7fI6GUWmJKknggILdc5DUB/3c71aa803c1cf8a62ef94246dce074e3/dish-2.webp',
    'https://images.ctfassets.net/rmkbw43wse32/37CIt2ZvkMMAtH8imCpEd4/31a9bfe321240b6f65758ad78b326875/dish-4.webp',
    'https://images.ctfassets.net/rmkbw43wse32/dM9cMYfgT5d14bq8uCtiC/0074799d8743760941d10da16061c852/dish-6.webp',
    'https://images.ctfassets.net/rmkbw43wse32/xb5AiaxngU8mMcT3hP22Q/21fd069ec1af95974ae10662e1170e63/dish-5.webp',
    'https://images.ctfassets.net/rmkbw43wse32/gzyHEmRyS7StYXJSSGoWt/e1927f9a4630416a9c61e2f466faa3e2/breakfast-4.webp',
    'https://images.ctfassets.net/rmkbw43wse32/2BXodxjowzqfPJkILLquVh/4b6f64d5de692d0d96ab944e29acb778/breakfast-5.webp',
    'https://images.ctfassets.net/rmkbw43wse32/1lljDzhuPQcY7pBhMTp2hI/89cb265b79a5f2f3734d72be5bec6881/breakfast-7.webp',
    'https://images.ctfassets.net/rmkbw43wse32/1c3MPuRHShmP9Qp8LYu7Ha/4dc8c99bbb51a7ab657095009db8a9ee/breakfast-1.webp',
    'https://images.ctfassets.net/rmkbw43wse32/wJtzV5Uyv1qhIj9UvrX4G/05b71fd82c2890eb506cd55c428e2208/breakfast-6.webp',
    'https://images.ctfassets.net/rmkbw43wse32/a9yCXvzZak0fGV7BYMRqW/2747be899bbb9044de105db235a63fc5/breakfast-3.webp',
    'https://images.ctfassets.net/rmkbw43wse32/6WKYCjzPLGBkF2JZLBXbM8/39989a46906fc188ea71119b750023c9/breakfast-2.webp',
    'https://images.ctfassets.net/rmkbw43wse32/6FjDNYozOVm7pe4SKO0CQ5/f2bf93ce7dd57f8eadf0e281db85ebfb/dessert-2.webp',
    'https://images.ctfassets.net/rmkbw43wse32/3YlGnnnabfCmqtUT1opBwi/e994767c40ed9e9f3528fc326c9abda4/dessert-1.webp',
    'https://images.ctfassets.net/rmkbw43wse32/4AdPMqpUoIKv09zbSCMG8D/d01ab365fb64da047cd38c074a1052de/drink-4.webp',
    'https://images.ctfassets.net/rmkbw43wse32/3rmNb3mivcU1pV8V7lAfPz/4aa44d44db7e3ddb75068cc4f6efdf4b/drink-3.webp',
    'https://images.ctfassets.net/rmkbw43wse32/4Sgyfrh7bo0j5ISu0ozpD7/a4879c6846c7d6f7427fe9cc9a8cc0e0/drink-2.webp',
    'https://images.ctfassets.net/rmkbw43wse32/5cGAmQBrdd0wK9l1P6t49o/14dd52a30e70327eb983050bc34a808d/drink-1.webp',
    'https://cdn.jsdelivr.net/npm/contentful@latest/dist/contentful.browser.min.js',
    'https://fonts.googleapis.com/css2?family=Figtree:wght@300..600&display=swap'
]

self.addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open(staticLilBaghdad).then(cache => {
            cache.addAll(assets);
        })
    )
})

self.addEventListener('fetch', fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    )
})