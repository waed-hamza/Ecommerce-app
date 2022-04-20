const initialProducts = JSON.parse(localStorage.getItem("productsData"));
let productsContainer = document.getElementById("products");

// categories
let categories = new Set();
let categoriesList = document.getElementById("categories-list");

//filters: display, price
let displayGrid = document.getElementById("grid");
let displayList = document.getElementById("list");
let priceHighToLow = document.getElementById("highToLow");
let priceLowToHigh = document.getElementById("lowToHigh");

// search: button, input
let searchBtn = document.getElementById("search-btn");
let searchInput = document.getElementById("search-input");

// cart: number of added products || and Add to cart Btn
let addedProductsCount = document.getElementById("added-products-count");
let addToCartBtn = document.getElementsByClassName("add-cart-btn");
let totalPriceInCart = document.getElementById("total-price");
let addedProducts = JSON.parse(sessionStorage.getItem("addedProducts"));

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
  let products = [...initialProducts];
  products.sort((a, b) => parseInt(a.price) - parseInt(b.price));

  displayProducts(products);
});

priceHighToLow.addEventListener("click", () => {
  let products = [...initialProducts];
  products.sort((a, b) => parseInt(b.price) - parseInt(a.price));

  displayProducts(products);
});

// Search button event: click
searchBtn.addEventListener("click", () => {
  if (searchInput.value.length == 0) {
    searchInput.focus();
  } else {
    let filteredProducts = filterProducts(searchInput.value);
    displayProducts(filteredProducts);
  }
});

searchInput.addEventListener("input", (e) => {
  let filteredProducts = filterProducts(e.target.value);
  displayProducts(filteredProducts);
});

const filterProducts = (searchInput) => {
  return initialProducts.filter((el) => {
    return el.category
      .toLocaleLowerCase()
      .includes(searchInput.toLocaleLowerCase());
  });
};

// Filter by categories
categoriesList.addEventListener("click", (e) => {
  let clickedCategory = e.target.innerText.toLocaleLowerCase();
  let filteredProducts = filterProducts(clickedCategory);

  displayProducts(filteredProducts);
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
  addedProductsCount.innerText = parseInt(addedProductsCount.innerText) + 1;
};

const incrementTotalPrice = (price) => {
  let productPrice = Number(price.substring(2));
  let totalPrice =
    Number(totalPriceInCart.innerText.substring(1)) + productPrice;

  totalPriceInCart.innerText = "$" + totalPrice;
};

const updateAddedProducts = (productName) => {
  let addedProduct = initialProducts.filter((el) => {
    return el.name == productName;
  });

  addedProducts.push({ ...addedProduct });
  sessionStorage.setItem("addedProducts", JSON.stringify(addedProducts));
};
