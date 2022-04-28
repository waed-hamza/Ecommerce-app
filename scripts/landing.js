import { filterByPriceLowToHigh } from "./testsFunctions.js";
import { filterByPriceHighToLow } from "./testsFunctions.js";
import { filterProducts } from "./testsFunctions.js";

const initialProducts = JSON.parse(localStorage.getItem("productsData"));
let productsContainer = document.getElementById("products");

// categories
let categories = new Set();
let categoriesList = document.getElementById("categories-list");
let categoriesBtn = document.getElementById("categories-button");

//filters: display, price
let displayGrid = document.getElementById("grid");
let displayList = document.getElementById("list");
let priceHighToLow = document.getElementById("highToLow");
let priceLowToHigh = document.getElementById("lowToHigh");
let filtersContainer = document.getElementById("filters");

// search: button, input
let searchBtn = document.getElementById("search-btn");
let searchInput = document.getElementById("search-input");

// cart: number of added products || and Add to cart Btn
let addedProductsCount = document.getElementById("added-products-count");
let addToCartBtn = document.getElementsByClassName("add-cart-btn");
let totalPriceInCart = document.getElementById("total-price");

// session storage
let addedItemsCount = JSON.parse(sessionStorage.getItem("addedItemsCount"));
let addedItemsPrice = JSON.parse(sessionStorage.getItem("addedItemsPrice"));
let addedItems = JSON.parse(sessionStorage.getItem("addedItems"));

// seller, buyer buttons
let sellerBtn = document.getElementById("seller");

// JavaScript anonymous function
(() => {
  if (window.localStorage) {
    // If there is no item as 'reload'
    // in localstorage then create one &
    // reload the page
    if (!localStorage.getItem("reload")) {
      localStorage["reload"] = true;
      window.location.reload();
    } else {
      // If there exists a 'reload' item
      // then clear the 'reload' item in
      // local storage
      localStorage.removeItem("reload");
    }
  }
})();

// Display products function
const displayProducts = (products) => {
  productsContainer.innerHTML = "";

  products.forEach((el) => {
    let productDiv = document.createElement("div");
    productDiv.classList.add("product");

    let productImg = document.createElement("img");
    productImg.setAttribute("src", el.imgSrc);

    let productPrice = document.createElement("span");
    productPrice.classList.add("product-price");
    productPrice.innerText = `$ ${el.price}`;

    let productName = document.createElement("span");
    productName.classList.add("product-name");
    productName.innerText = el.name;

    let addProductBtn = document.createElement("button");
    addProductBtn.classList.add("add-cart-btn");
    addProductBtn.innerText = "Add to Cart";

    productDiv.appendChild(productImg);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productName);
    productDiv.appendChild(addProductBtn);

    productsContainer.appendChild(productDiv);
    categories.add(el.category);
  });

  // Add categories to categories list
  categoriesList.innerHTML = "";
  categories.forEach((el) => {
    let li = document.createElement("li");
    li.innerText = el;
    categoriesList.appendChild(li);
  });

  // update cart
  addedProductsCount.innerText = addedItemsCount;
  totalPriceInCart.innerText = `$${addedItemsPrice}`;
};

displayProducts(initialProducts);

// Display & price
displayGrid.addEventListener("click", () => {
  productsContainer.style.flexDirection = "row";
});

displayList.addEventListener("click", () => {
  productsContainer.style.flexDirection = "column";
});

priceLowToHigh.addEventListener("click", () => {
  let products = filterByPriceLowToHigh(initialProducts);

  displayProducts(products);
});

priceHighToLow.addEventListener("click", () => {
  let products = filterByPriceHighToLow(initialProducts);

  displayProducts(products);
});

// Search button event: click
searchBtn.addEventListener("click", () => {
  if (searchInput.value.length == 0) {
    searchInput.focus();
  } else {
    let filteredProducts = filterProducts(searchInput.value, initialProducts);
    displayProducts(filteredProducts);
  }
});

searchInput.addEventListener("input", (e) => {
  let filteredProducts = filterProducts(e.target.value, initialProducts);
  displayProducts(filteredProducts);
});

// Categories btn clicked
categoriesBtn.addEventListener("click", () => {
  if (categoriesList.children.length > 0) {
    if (categoriesList.style.display == "block") {
      categoriesList.style.display = "none";
    } else {
      categoriesList.style.display = "block";
    }
  }

  if (window.innerWidth <= 500) {
    if (filtersContainer.style.display == "none") {
      filtersContainer.style.display = "flex";
    } else {
      filtersContainer.style.display = "none";
    }
  }
});

// Filter by categories
categoriesList.addEventListener("click", (e) => {
  let clickedCategory = e.target.innerText.toLocaleLowerCase();
  let filteredProducts = filterProducts(clickedCategory, initialProducts);

  displayProducts(filteredProducts);
});

// Seller button clicked
sellerBtn.addEventListener("click", () => {
  location.href = "./html/seller.html";
});

// Add to Cart btn
for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener("click", (e) => {
    // increment count
    incrementAddedCount();

    // increment price
    let productPrice = e.target.previousSibling.previousSibling.innerText;
    incrementTotalPrice(productPrice);

    // update addedProducts array
    let productName = e.target.previousSibling.innerText;
    updateAddedProducts(productName);
  });
}

const incrementAddedCount = () => {
  addedItemsCount = addedItemsCount += 1;
  addedProductsCount.innerText = addedItemsCount;
  sessionStorage.setItem("addedItemsCount", JSON.stringify(addedItemsCount));
};

const incrementTotalPrice = (price) => {
  let productPrice = Number(price.substring(2));
  addedItemsPrice += productPrice;

  totalPriceInCart.innerText = "$" + addedItemsPrice;
  sessionStorage.setItem("addedItemsPrice", JSON.stringify(addedItemsPrice));
};

const updateAddedProducts = (productName) => {
  let addedProduct = initialProducts.filter((el) => {
    return el.name == productName;
  });

  addedItems.push(...addedProduct);
  sessionStorage.setItem("addedItems", JSON.stringify(addedItems));
};

// session storage
sessionStorage.setItem(
  "addedItemsCount",
  JSON.stringify(addedItemsCount ? addedItemsCount : 0)
);

sessionStorage.setItem(
  "addedItemsPrice",
  JSON.stringify(addedItemsPrice ? addedItemsPrice : 0)
);

sessionStorage.setItem(
  "addedItems",
  JSON.stringify(addedItems ? addedItems : [])
);
