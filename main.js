/* Constantes generales de selectores del HTML */
const desktopMenu = document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.navbar-email');
const mobileMenu = document.querySelector('.mobile-menu');
const hamIconMenu = document.querySelector('.menu');
const shoppingCarIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');

/* Escuchadores de eventos */
menuEmail.addEventListener('click', toggleDesktopMenu);
hamIconMenu.addEventListener('click', toggleMobileMenu);
shoppingCarIcon.addEventListener('click', toggleShoppingCart);
productDetailClose.addEventListener('click', closeProductDetailAside);

/* Intercambiadores de estado (Activo/Inactivo) */
function toggleDesktopMenu (){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  const isProductDetailColosed = productDetailContainer.classList.contains('inactive');

  if(!isAsideClosed || !isProductDetailColosed){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu (){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  const isProductDetailColosed = productDetailContainer.classList.contains('inactive');

  if(!isAsideClosed || !isProductDetailColosed){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
};

function toggleShoppingCart (){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isProductDetailColosed = productDetailContainer.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if(!isMobileMenuClosed || !isProductDetailColosed || !isDesktopMenuClosed){
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
};

function openProductDetailAside(){
  mobileMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive');
}

/* Array de lista de productos a insertar en HTML (en espera para cambiarlos con integracion a API-res) */
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Mirror',
  price: 75,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Blanket',
  price: 150,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'TV',
  price: 320,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'PC Gamer',
  price: 520,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Blue-Ray',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

/* Inyector de HTML de las tarjetas de productos */
function InyectorDeProductos(arr){
  for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const img = document.createElement('img');
    img.setAttribute('src', product.image);
    /* La siguiente line escucha evento en la imagen y abre el product detail */
    img.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    const productInfoFigure = document.createElement('figure');
  
    const imgAddToCard = document.createElement('img');
    imgAddToCard.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.append(imgAddToCard);
    productInfo.append(productInfoDiv, productInfoFigure);
    productInfoDiv.append(productPrice, productName);
    productCard.append(img, productInfo);
  
    cardsContainer.append(productCard);
  }
}

InyectorDeProductos(productList)