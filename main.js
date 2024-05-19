const desktopMenu = document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.navbar-email');
const mobileMenu = document.querySelector('.mobile-menu');
const hamIconMenu = document.querySelector('.menu');
const shoppingCarIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamIconMenu.addEventListener('click', toggleMobileMenu);
shoppingCarIcon.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu (){
  const isProductDetailColosed = shoppingCartContainer.classList.contains('inactive')

  if(!isProductDetailColosed){
    shoppingCartContainer.classList.add('inactive')
  }

  desktopMenu.classList.toggle('inactive')
};

function toggleMobileMenu (){
  const isProductDetailColosed = shoppingCartContainer.classList.contains('inactive')
  
  if(!isProductDetailColosed){
    shoppingCartContainer.classList.add('inactive')
  }

  mobileMenu.classList.toggle('inactive')
};

function toggleShoppingCart (){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive')
  }

  shoppingCartContainer.classList.toggle('inactive')
};

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

for (product of productList){
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const img = document.createElement('img');
  img.setAttribute('src', product.image);

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
  productCard.append(img, productInfo)

  cardsContainer.append(productCard)
}