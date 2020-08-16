const getCart = () => {
  const newCart = JSON.parse(localStorage.getItem('cart'));
  return newCart || [];
};

let cart = getCart();

const saveCart = () => localStorage.setItem('cart', JSON.stringify(cart));

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

const sumTotalPrice = async () => {
  const total = document.querySelector('.total-price');
  total.innerText = cart.reduce((acc, item) => acc + item.salePrice, 0);
};

async function clearCart() {
  const carts = document.querySelector('.cart__items');
  carts.innerHTML = '';
  cart = [];
  saveCart();
  sumTotalPrice();
}

const clearBtn = document.querySelector('.empty-cart');
clearBtn.addEventListener('click', clearCart);

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

const loading = () =>
  document
    .querySelector('.load-container')
    .appendChild(createCustomElement('span', 'loading', 'loading...'));

function cartItemClickListener(event) {
  event.target.parentElement.remove();
  const remakeCart = cart.filter(({ id }) => `${id}` !== event.target.id);
  cart = remakeCart;
  saveCart();
  sumTotalPrice();
}

function createCartItemElement({ name, salePrice, id, image }) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.className = 'span__item';
  li.className = 'cart__item';
  li.innerText = `${name}

  R$${salePrice.toFixed(2)}`;
  li.id = id;
  span.addEventListener('click', cartItemClickListener);
  span.appendChild(li);
  span.appendChild(createProductImageElement(image));
  return span;
}

loadCart = () => {
  getCart()
    .map(product => createCartItemElement(product))
    .forEach((prod) => {
      document.querySelector('.cart__items').appendChild(prod);
    });
  sumTotalPrice();
};

async function addToCart({ sku }) {
  await fetch(`https://api.mercadolibre.com/items/${sku}`)
    .then(response => response.json())
    .then((data) => {
      const newCartItem = {
        sku: data.id,
        name: data.title,
        image: data.thumbnail,
        salePrice: data.price,
        id: Math.floor(Math.random() * 9999999),
      };
      cart.push(newCartItem);
      document.querySelector('.cart__items').appendChild(createCartItemElement(newCartItem));
    });
  saveCart();
  sumTotalPrice();
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const addToCartBtn = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  addToCartBtn.addEventListener('click', () => {
    addToCart({ sku });
  });
  section.appendChild(addToCartBtn);
  return section;
}

window.onload = function onload() {
  loading();
  setTimeout(() => {
    (document.querySelector('.loading').remove());
  }, 444);
  fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
    .then(response => response.json())
    .then((data) => {
      data.results.forEach((item) => {
        const product = createProductItemElement({
          sku: item.id,
          name: item.title,
          image: item.thumbnail,
        });
        document.querySelector('.items').appendChild(product);
      });
    });
  loadCart();
};
