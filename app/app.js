const plusICon = document.querySelector(".plusIcon");
const minusIcon = document.querySelector(".minusIcon");
const counterOfShopsElement = document.querySelector(".numsOfShoesSpan");
const mainPriceElement = document.querySelector(".mainPrice");
const offPriceElement = document.querySelector(".offPrice");
const images = document.querySelectorAll(".image");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modalImage");
const modalImageCollection = document.querySelector(".modalImageCollection");
const closeTag = document.querySelector(".closeTag");
const nextIcon = document.querySelector(".nextIconContainer");
const perviousIcon = document.querySelector(".perviousIconContainer");
const cartIcon = document.querySelector(".cartIcon");
const modalCart = document.querySelector(".cartModal");
const cartBody = document.querySelector(".informationOfBuy");
const addToCart = document.querySelector(".addToCartButton");
const counterBuy = document.querySelector("#counterBuy");
const mainPrice = 250;
let counterOfShoes = +counterOfShopsElement.innerText;
let totalMainPrice = 0;
let totalOffPrice = 0;

numsOfShoes();
showPicture();
closeTagProcessing();
cart();

function closeTagProcessing() {
  closeTag.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

function numsOfShoes() {
  plusICon.addEventListener("click", () => {
    counterOfShoes++;
    counterOfShopsElement.innerText = counterOfShoes;
    totalMainPrice = counterOfShoes * 250;
    mainPriceElement.innerText = `${totalMainPrice}$`;
    totalOffPrice = totalMainPrice / 2;
    offPriceElement.innerText = `${totalOffPrice}$`;
    addCart(totalOffPrice, counterOfShoes);
  });
  minusIcon.addEventListener("click", () => {
    if (counterOfShoes > 0) {
      counterOfShoes--;
      counterOfShopsElement.innerText = counterOfShoes;
      totalMainPrice = counterOfShoes * 250;
      mainPriceElement.innerText = `${totalMainPrice}$`;
      totalOffPrice = totalMainPrice / 2;
      offPriceElement.innerText = `${totalOffPrice}$`;
      addCart(totalOffPrice, counterOfShoes);
    }
    counterOfShopsElement.innerText = counterOfShoes;
  });
}

function showPicture() {
  images.forEach((element) => {
    element.addEventListener("click", () => {
      modal.style.display = "block";
      modalImage.src = `../assest/image-product-${element.alt}.jpg`;
      modalImage.alt = element.alt;
    });
  });
  nextIcon.addEventListener("click", () => {
    if (+modalImage.alt >= 4) {
      modalImage.alt = 1;
      modalImage.src = `../assest/image-product-${modalImage.alt}.jpg`;
    } else {
      modalImage.src = `../assest/image-product-${++modalImage.alt}.jpg`;
    }
  });
  perviousIcon.addEventListener("click", () => {
    if (+modalImage.alt <= 1) {
      modalImage.alt = 4;
      modalImage.src = `../assest/image-product-${modalImage.alt}.jpg`;
    } else {
      modalImage.src = `../assest/image-product-${--modalImage.alt}.jpg`;
    }
  });
}

function cart() {
  cartIcon.addEventListener("click", () => {
    modalCart.classList.toggle("show");
  });
}

function addCart(offPrice, counter) {
  addToCart.addEventListener("click", () => {
    cartBody.innerHTML = `
    <img src="../assest/image-product-1-thumbnail.jpg" class="cartImage">
    <p class="NameOfShoes px-2">Fall Limited Edition Sneakers</p>
    <p class="shoesCounter">$125.00 * ${counter}&ThinSpace;<span class="totalPrice"><strong>${offPrice}$</strong></span></p>
    `;
    if(counter != 0){
        counterBuy.style.display = "flex" ;
        counterBuy.innerText = counter ;
    }else{
        counterBuy.style.display = "none" ;
    }
  });
}
