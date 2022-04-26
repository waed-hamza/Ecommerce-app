let productsData = JSON.parse(localStorage.getItem("productsData"));
let productsContainer = document.getElementById("products");

// delete btn
let deleteProductBtn = document.getElementsByClassName("delete");

// Add product btn & form container & close Btn & cancel btn
let addProductBtn = document.getElementById("add-product-btn");
let formContainer = document.getElementById("form-container");
let closeBtn = document.getElementById("close-btn");
let cancelBtn = document.getElementById("cancel-btn");

// save btn
let saveBtn = document.getElementById("save-btn");
let productNameInput = document.getElementById("product-name");
let productPriceInput = document.getElementById("product-price");
let productImageInput = document.getElementById("product-image");
let productCategoryInput = document.getElementById("categories");
let form = document.getElementById("form");

// edit btns
let editBtns = document.getElementsByClassName("edit");
let saveChangesBtn = document.getElementById("save-changes-btn");

// search: button, input
let searchBtn = document.getElementById("search-btn");
let searchInput = document.getElementById("search-input");

// buyer button
let buyerBtn = document.getElementById("buyer");

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
    productPrice.innerText = `$ ${el.price}`;

    let productName = document.createElement("span");
    productName.classList.add("product-name");
    productName.innerText = el.name;

    let deleteProductBtn = document.createElement("button");
    deleteProductBtn.classList.add("btn", "delete");
    deleteProductBtn.innerText = "Delete";

    let editProductBtn = document.createElement("button");
    editProductBtn.classList.add("btn", "edit");
    editProductBtn.innerText = "Edit";

    let btnsContainer = document.createElement("div");
    btnsContainer.classList.add("btns-container");
    btnsContainer.appendChild(deleteProductBtn);
    btnsContainer.appendChild(editProductBtn);

    productDiv.appendChild(productImg);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productName);
    productDiv.appendChild(btnsContainer);

    productsContainer.appendChild(productDiv);
  });
};

displayProducts(productsData);

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
  return productsData.filter((el) => {
    return el.category
      .toLocaleLowerCase()
      .includes(searchInput.toLocaleLowerCase());
  });
};

// delet btn clicked
for (let i = 0; i < deleteProductBtn.length; i++) {
  deleteProductBtn[i].addEventListener("click", (e) => {
    // remove deleted product from productsData array
    let productName = e.target.parentNode.previousSibling.innerText;
    removeProductFromProductsData(productName);
  });
}

// remove deleted product from productsData array
const removeProductFromProductsData = (productName) => {
  productsData = productsData.filter((product) => {
    return product.name != productName;
  });

  localStorage.setItem("productsData", JSON.stringify(productsData));
  displayProducts(productsData);
  location.reload();
};

// buyer Btn clicked
buyerBtn.addEventListener("click", () => {
  location.href = "../index.html";
});

// add product btn clicked
addProductBtn.addEventListener("click", () => {
  formContainer.style.visibility = "visible";
  saveBtn.style.display = "block";
  saveChangesBtn.style.display = "none";

  productNameInput.disabled = false;
  productNameInput.style.color = "black";
  productNameInput.value = "";
  productImageInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
});

// close the form btn
closeBtn.addEventListener("click", () => {
  formContainer.style.visibility = "hidden";
});

// cancel the changes form btn
cancelBtn.addEventListener("click", () => {
  formContainer.style.visibility = "hidden";
});

// save btn clicked
saveBtn.addEventListener("click", (e) => {
  let obj = {};
  obj.imgSrc = productImageInput.value;
  obj.price = productPriceInput.value;
  obj.name = productNameInput.value;
  obj.category = productCategoryInput.value;

  productsData.push(obj);
  localStorage.setItem("productsData", JSON.stringify(productsData));
  displayProducts(productsData);
});

// edit btns clicked
for (let i = 0; i < editBtns.length; i++) {
  editBtns[i].addEventListener("click", (e) => {
    formContainer.style.visibility = "visible";
    saveChangesBtn.style.display = "block";
    saveBtn.style.display = "none";

    let productName = e.target.parentNode.previousSibling.innerText;

    // get product information and store it
    let productInformation = getProductInformation(productName);
    productName = productInformation[0].name;
    let productPrice = productInformation[0].price;
    let productImgURL = productInformation[0].imgSrc;
    let productCategory = productInformation[0].category;

    // fill form inputs with product information
    fillFormWithProductData(
      productName,
      productPrice,
      productCategory,
      productImgURL
    );
  });
}

// get product information from products data array
const getProductInformation = (productName) => {
  return productsData.filter((product) => product.name == productName);
};

// fill form inputs with product information
const fillFormWithProductData = (name, price, category, imgSrc) => {
  productNameInput.value = name;
  productNameInput.disabled = true;
  productNameInput.style.color = "#a19a9a";

  productPriceInput.value = price;
  productImageInput.value = imgSrc;
  productCategoryInput.value = category;
};

// save changes btn clicked
saveChangesBtn.addEventListener("click", (e) => {
  let obj = {};
  obj.imgSrc = productImageInput.value;
  obj.price = productPriceInput.value;
  obj.name = productNameInput.value;
  obj.category = productCategoryInput.value;

  editProductsData(obj);
});

// edit products data array
const editProductsData = ({ name, price, imgSrc, category }) => {
  for (let i = 0; i < productsData.length; i++) {
    if (productsData[i].name == name) {
      productsData[i].price = price;
      productsData[i].imgSrc = imgSrc;
      productsData[i].category = category;
      break;
    }
  }

  localStorage.setItem("productsData", JSON.stringify(productsData));
  displayProducts(productsData);
};
