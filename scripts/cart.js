let addedProducts = JSON.parse(sessionStorage.getItem("addedItems"));
let productsContainer = document.getElementById("products");

// remove cart btn
let removeProductBtn = document.getElementsByClassName("remove-cart-btn");

// total price
let totalPriceSpan = document.getElementById("total-price-span");
let addedItemsPrice = JSON.parse(sessionStorage.getItem("addedItemsPrice"));
let addedItemsCount = JSON.parse(sessionStorage.getItem("addedItemsCount"));
let addedItems = JSON.parse(sessionStorage.getItem("addedItems"));

// Display products function
const displayProducts = (products) => {
  productsContainer.innerHTML = "";

  products.forEach((el) => {
    let productDiv = document.createElement("div");
    productDiv.classList.add("product");

    let productImg = document.createElement("img");
    productImg.setAttribute("src", `.${el.imgSrc}`);

    let productPrice = document.createElement("span");
    productPrice.classList.add("product-price");
    productPrice.innerText = `Price: $ ${el.price}`;

    let productName = document.createElement("span");
    productName.classList.add("product-name");
    productName.innerText = el.name;

    let removeProductBtn = document.createElement("button");
    removeProductBtn.classList.add("remove-cart-btn");
    removeProductBtn.innerText = "Remove from Cart";

    let informationContainer = document.createElement("div");
    informationContainer.classList.add("infromation-container");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    imgContainer.appendChild(productImg);
    informationContainer.appendChild(productName);
    informationContainer.appendChild(productPrice);
    informationContainer.appendChild(removeProductBtn);
    productDiv.appendChild(imgContainer);
    productDiv.appendChild(informationContainer);

    productsContainer.appendChild(productDiv);
  });

  // display total price
  totalPriceSpan.innerText = `$ ${addedItemsPrice}`;
};

displayProducts(addedProducts);

// remove deleted product
for (let i = 0; i < removeProductBtn.length; i++) {
  removeProductBtn[i].addEventListener("click", (e) => {
    // decrement count
    decrementCount();

    // decrement price
    let productPrice = e.target.previousSibling.innerText;
    decrementTotalPrice(productPrice);

    // update addedProducts array
    let productName = e.target.previousSibling.previousSibling.innerText;
    updateAddedProducts(productName);
  });
}

// decrement count
const decrementCount = () => {
  addedItemsCount = addedItemsCount - 1;
  sessionStorage.setItem("addedItemsCount", JSON.stringify(addedItemsCount));
};

// decrement price
const decrementTotalPrice = (price) => {
  let productPrice = Number(price.substring(9));
  addedItemsPrice -= productPrice;
  sessionStorage.setItem("addedItemsPrice", JSON.stringify(addedItemsPrice));
};

// update addedProducts array & display
const updateAddedProducts = (productName) => {
  for (let i = 0; i < addedProducts.length; i++) {
    if (addedProducts[i].name == productName) {
      addedProducts.splice(i, 1);
      break;
    }
  }

  sessionStorage.setItem("addedItems", JSON.stringify(addedProducts));
  displayProducts(addedProducts);
  location.reload();
};
