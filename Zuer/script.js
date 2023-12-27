const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const clos = document.getElementById('close');
const cart = document.getElementById('cart');
const bagmob = document.getElementById('bg');
const bag = document.getElementById('bag');
let k = 0;
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (clos) {
    clos.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

if (bagmob) {
    bagmob.addEventListener('click', () => {
        cart.classList.toggle('active');
        k = (k === 0) ? 1 : 0;
    });
}

if (bag) {
    bag.addEventListener('click', () => {
        cart.classList.toggle('active');
        k = (k === 0) ? 1 : 0;
    });
}
// Check if localStorage is supported
function isLocalStorageSupported() {
    try {
        const testKey = 'test';
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}

let cartinv = [];

// Check if localStorage is supported
if (isLocalStorageSupported()) {
    // Retrieve cartinv from localStorage when the page loads
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cartinv = JSON.parse(storedCart);
    }

    // Update cart UI initially
    updateCartUI();
}

const products = [
    { id: 1, name: 'Gojo Satoru T-Shirt', price: 25.00 },
    { id: 2, name: 'Mahito T-Shirt', price: 25.00 },
    { id: 3, name: 'Kento Nanami T-Shirt', price: 25.00 },
    { id: 4, name: 'Ryomen Sukuna T-Shirt', price: 25.00 },
    { id: 5, name: 'Gojo&Geto Mouse Pad', price: 15.00 },
    { id: 6, name: 'Sukuna`s Eye Ring', price: 10.00 },
    { id: 7, name: 'Gojo Satoru Poster', price: 30.00 },
    { id: 8, name: 'Gojo&Geto Figures', price: 149.99 },
    { id: 9, name: 'Yuji Itadori Lamp', price: 109.00 },
    { id: 10, name: 'Choso T-Shirt', price: 25.99 },
    { id: 11, name: 'Yuta&Rika Figure', price: 499.99 },
    { id: 12, name: 'Gojo Satoru Figure', price: 499.99 },
];

function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    const quantity = 1;

    if (!isNaN(quantity) && quantity > 0 && product) {
        const existingItem = cartinv.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cartinv.push({ id: productId, name: product.name, price: product.price, quantity });
        }

        // Save cartinv to localStorage
        localStorage.setItem('cart', JSON.stringify(cartinv));

        // Update cart UI
        updateCartUI();
    }
}

function removeFromCart(productId) {
    cartinv = cartinv.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cartinv));

    // Update cart UI
    updateCartUI();
}

function updateCartUI() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsElement.innerHTML = '';

    cartinv.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${(item.price * item.quantity).toFixed(2)} x ${item.quantity}`;

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('normal');
        deleteButton.style.padding =  '7px 15px';
        deleteButton.onclick = function () {
            removeFromCart(item.id);
        };

        li.appendChild(deleteButton);
        cartItemsElement.appendChild(li);
    });

    // Update total price
    const totalAmount = cartinv.reduce((total, item) => total + item.price * item.quantity, 0);
    totalPriceElement.textContent = `Total Price: $${totalAmount.toFixed(2)}`;
}


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (clos) {
    clos.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

var mi = document.getElementById('mainimg');
var si = document.getElementsByClassName('small-img');

si[0].onclick = function () {
    mi.src = si[0].src;
};

si[1].onclick = function () {
    mi.src = si[1].src;
};

si[2].onclick = function () {
    mi.src = si[2].src;
};