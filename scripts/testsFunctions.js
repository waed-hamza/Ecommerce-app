// Landing page functions:

// 1. filter low to high function
const filterByPriceLowToHigh = (productsArr) => {
  let products = [...productsArr];
  return products.sort((a, b) => parseInt(a.price) - parseInt(b.price));
};

// 2. filter high to low function
const filterByPriceHighToLow = (productsArr) => {
  let products = [...productsArr];
  return products.sort((a, b) => parseInt(b.price) - parseInt(a.price));
};

// 3. search function
const filterProducts = (searchInput, productsArr) => {
  return productsArr.filter((el) => {
    return el.category
      .toLocaleLowerCase()
      .includes(searchInput.toLocaleLowerCase());
  });
};

// Seller pagge functions:

// 1. remove deleted product from productsData array
const removeProductFromProductsData = (productsData, productName) => {
  return productsData.filter((product) => {
    return product.name != productName;
  });
};

// 2. add product to productsData arr
const addProductToProductsArray = (arr, product) => {
  arr.push(product);
  return arr;
};

// 3. edit products data array
const editProductsData = (productsData, { name, price, imgSrc, category }) => {
  for (let i = 0; i < productsData.length; i++) {
    if (productsData[i].name == name) {
      productsData[i].price = price;
      productsData[i].imgSrc = imgSrc;
      productsData[i].category = category;
      break;
    }
  }

  return productsData;
};

export {
  filterByPriceLowToHigh,
  filterByPriceHighToLow,
  filterProducts,
  removeProductFromProductsData,
  addProductToProductsArray,
  editProductsData,
};
