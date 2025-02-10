const shoppingCart = document.querySelector(".header__cart");
const CartModal = document.querySelector(".cart");
const closeCartModal = document.querySelector(".cart__close-button span");
const closeCartArrow = document.querySelector(".cart__close-button svg");
const themeToggleButton = document.querySelector(".header__theme");
const darkIcon = document.querySelector(".dark-icon");
const lightIcon = document.querySelector(".light-icon");
const container = document.querySelector(".container");
const productAddButton = document.querySelectorAll(".product__button");
const clickSound = new Audio();
clickSound.src = "./assets/click-sound.wav";
const cartProductsArea = document.querySelector(".cart__products");
const products = document.querySelectorAll(".product");
const getDeleteIcons = () => document.querySelectorAll(".cart__delete-icon");
const noOfItems = document.querySelector(".cart__items");
// const getCartProductCounter = () =>
//   document.querySelectorAll(".cart__product__counter");

const checkoutPrice = document.querySelector(".checkout__price");

shoppingCart.addEventListener("click", () => {
  CartModal.classList.add("cart--isActive");
});
closeCartModal.addEventListener("click", () => {
  CartModal.classList.remove("cart--isActive");
});
closeCartArrow.addEventListener("click", () => {
  CartModal.classList.remove("cart--isActive");
});

const saveToDB = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const fetchData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : false;
};

darkIcon.addEventListener("click", () => {
  container.classList.add("container--isDark");
  clickSound.play();
  saveToDB("darkModeFlag", true);
});

lightIcon.addEventListener("click", () => {
  container.classList.remove("container--isDark");
  clickSound.play();
  saveToDB("darkModeFlag", false);
});

const checkForDarkTheme = () => {
  if (fetchData("darkModeFlag") === true) {
    container.classList.add("container--isDark");
  } else {
    container.classList.remove("container--isDark");
  }
};
checkForDarkTheme();

const addProduct = (arrName) => {
  let cartItems = "";
  let finalPrice = 0;
  arrName.forEach((item) => {
    cartItems += `<div class="cart__product">
    <div class="cart__product__info">
      <div class="cart__product__img">
        <img src="assets/no-photo-icon.svg" alt="" class="cart__product-image" />
      </div>
      <div class="cart__product__name">${item.name}</div>
    </div>
    <div class="cart__product__amount">
      <input type="number" min="1" max="30" class="cart__product__counter" />
      <span class="cart__product__price">${item.price}</span>
      <svg
        class="cart__delete-icon"
        data-index="${item.index}"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="1024"
        zoomAndPan="magnify"
        viewBox="0 0 768 576"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <defs>
          <clipPath id="896f5d6a79">
            <path
              d="M 185.160156 16.628906 L 578.910156 16.628906 L 578.910156 553.628906 L 185.160156 553.628906 Z M 185.160156 16.628906 "
              clip-rule="nonzero"
            />
          </clipPath>
        </defs>
        <g clip-path="url(#896f5d6a79)">
          <path
            fill="#ff3131"
            d="M 543.082031 160.019531 C 543.082031 150.140625 535.0625 142.125 525.183594 142.125 L 238.847656 142.125 C 228.96875 142.125 220.949219 150.140625 220.949219 160.019531 L 220.949219 422.199219 C 220.949219 496 269.199219 553.734375 325.429688 553.734375 C 361.273438 553.734375 402.757812 553.734375 438.605469 553.734375 C 494.832031 553.734375 543.082031 496 543.082031 422.199219 Z M 507.289062 177.914062 L 507.289062 422.199219 C 507.289062 473.972656 478.046875 517.941406 438.605469 517.941406 C 438.605469 517.941406 325.429688 517.941406 325.429688 517.941406 C 285.984375 517.941406 256.742188 473.972656 256.742188 422.199219 C 256.742188 422.199219 256.742188 177.914062 256.742188 177.914062 Z M 364.121094 231.605469 L 364.121094 464.253906 C 364.121094 474.132812 372.136719 482.148438 382.015625 482.148438 C 391.894531 482.148438 399.914062 474.132812 399.914062 464.253906 L 399.914062 231.605469 C 399.914062 221.726562 391.894531 213.707031 382.015625 213.707031 C 372.136719 213.707031 364.121094 221.726562 364.121094 231.605469 Z M 292.535156 231.605469 L 292.535156 464.253906 C 292.535156 474.132812 300.554688 482.148438 310.429688 482.148438 C 320.308594 482.148438 328.328125 474.132812 328.328125 464.253906 L 328.328125 231.605469 C 328.328125 221.726562 320.308594 213.707031 310.429688 213.707031 C 300.554688 213.707031 292.535156 221.726562 292.535156 231.605469 Z M 435.703125 231.605469 L 435.703125 464.253906 C 435.703125 474.132812 443.722656 482.148438 453.601562 482.148438 C 463.480469 482.148438 471.496094 474.132812 471.496094 464.253906 L 471.496094 231.605469 C 471.496094 221.726562 463.480469 213.707031 453.601562 213.707031 C 443.722656 213.707031 435.703125 221.726562 435.703125 231.605469 Z M 310.429688 88.433594 L 203.054688 88.433594 C 193.175781 88.433594 185.160156 96.453125 185.160156 106.332031 C 185.160156 116.210938 193.175781 124.226562 203.054688 124.226562 L 560.976562 124.226562 C 570.855469 124.226562 578.875 116.210938 578.875 106.332031 C 578.875 96.453125 570.855469 88.433594 560.976562 88.433594 L 453.601562 88.433594 L 453.601562 59.695312 C 453.601562 36.035156 434.414062 16.851562 410.757812 16.851562 L 353.273438 16.851562 C 329.617188 16.851562 310.429688 36.035156 310.429688 59.695312 Z M 417.808594 59.695312 L 417.808594 88.433594 C 417.808594 88.433594 346.222656 88.433594 346.222656 88.433594 C 346.222656 88.433594 346.222656 59.695312 346.222656 59.695312 C 346.222656 55.792969 349.375 52.644531 353.273438 52.644531 C 353.273438 52.644531 410.757812 52.644531 410.757812 52.644531 C 414.660156 52.644531 417.808594 55.792969 417.808594 59.695312 Z M 417.808594 59.695312 "
            fill-opacity="1"
            fill-rule="evenodd"
          />
        </g>
      </svg>
    </div>
  </div>`;
    finalPrice += parseFloat(item.price.slice(1, -1));
  });
  cartProductsArea.innerHTML = cartItems;
  checkoutPrice.innerText = `$ ${finalPrice}`;
};

const renderEmptyCart = () => {
  cartProductsArea.innerHTML = `<div class="emptyCart">
  <img src="assets/empty-box-icon.svg" alt="" class="empty-box-icon" />
  <p class="empty-cart-phrase">Your shopping Cart is empty :(</p>
</div>`;
};

const checkForAddedProducts = (arrName) => {
  if (arrName) {
    arrName.forEach((item) => {
      products.forEach((product, index) => {
        let addButton = product.children[1].children[1];
        if (index === item.isAdded) {
          addButton.classList.add("product__button--isAdded");
        }
      });
    });
  }
};

products.forEach((product, index) => {
  let name = product.children[1].children[0].children[0].innerText;
  let price = product.children[1].children[0].children[1].innerText;
  let addButton = product.children[1].children[1];

  addButton.addEventListener("click", () => {
    if (addButton.classList.contains("product__button--isAdded")) {
      return;
    } else {
      addButton.classList.add("product__button--isAdded");
      let addedButton = {
        isAdded: index,
      };
      let addedButtons = fetchData("addedProduct") || [];
      addedButtons.push(addedButton);
      saveToDB("addedProduct", addedButtons);
      checkForAddedProducts(addedButtons, addButton);
      let item = {
        name: name,
        price: price,
        index: index,
      };
      let items = fetchData("products") || [];
      items.push(item);
      saveToDB("products", items);
      initTaskListener(items);
    }
  });
});

const deleteProduct = () => {
  getDeleteIcons().forEach((icon, index) => {
    icon.addEventListener("click", () => {
      const products = fetchData("products");
      const addedProducts = fetchData("addedProduct");
      productAddButton[icon.dataset.index].classList.remove(
        "product__button--isAdded"
      );
      addedProducts.splice(index, 1);
      saveToDB("addedProduct", addedProducts);

      products.splice(index, 1);
      saveToDB("products", products);
      initTaskListener(products);
    });
  });
};

const initTaskListener = (items) => {
  if (items.length) {
    addProduct(items);
    deleteProduct();
    let numberOfItems = "";
    numberOfItems = `You have ${items.length} items in your cart`;
    noOfItems.innerHTML = numberOfItems;
  } else {
    renderEmptyCart();
    noOfItems.innerHTML = `You have 0 items in your cart`;
    checkoutPrice.innerText = `$ 0`;
  }
};

initTaskListener(fetchData("products"));
checkForAddedProducts(fetchData("addedProduct"));
