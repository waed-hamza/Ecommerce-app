import {
  filterByPriceLowToHigh,
  filterByPriceHighToLow,
  filterProducts,
  removeProductFromProductsData,
  addProductToProductsArray,
  editProductsData,
} from "./scripts/testsFunctions.js";

// Test filter price Low To High
describe("test filter by price low to high", () => {
  let productsData = [
    {
      imgSrc: "./images/camera1.jpg",
      price: "65",
      name: "Video Camera Camcorder",
      category: "Cameras",
    },
    {
      imgSrc: "./images/headphone1.jpg",
      price: "10",
      name: "Sony ZX Series Wired On-Ear Headphones",
      category: "Headphones",
    },
    {
      imgSrc: "./images/laptop1.jpg",
      price: "1600",
      name: "Lenovo IdeaPad 3",
      category: "Laptops",
    },
    {
      imgSrc: "./images/phone1.jpg",
      price: "160",
      name: "Tracfone Blu View 4G LTE Prepaid",
      category: "SmartPhones",
    },
  ];

  test("It should return products sorted by price from low high", () => {
    const actual = filterByPriceLowToHigh(productsData);
    const expected = [
      {
        imgSrc: "./images/headphone1.jpg",
        price: "10",
        name: "Sony ZX Series Wired On-Ear Headphones",
        category: "Headphones",
      },
      {
        imgSrc: "./images/camera1.jpg",
        price: "65",
        name: "Video Camera Camcorder",
        category: "Cameras",
      },
      {
        imgSrc: "./images/phone1.jpg",
        price: "160",
        name: "Tracfone Blu View 4G LTE Prepaid",
        category: "SmartPhones",
      },
      {
        imgSrc: "./images/laptop1.jpg",
        price: "1600",
        name: "Lenovo IdeaPad 3",
        category: "Laptops",
      },
    ];

    expect(actual).toEqual(expected);
  });
});

// Test filter price High To Low
describe("test filter by prce high to low", () => {
  let productsData = [
    {
      imgSrc: "./images/camera1.jpg",
      price: "65",
      name: "Video Camera Camcorder",
      category: "Cameras",
    },
    {
      imgSrc: "./images/headphone1.jpg",
      price: "10",
      name: "Sony ZX Series Wired On-Ear Headphones",
      category: "Headphones",
    },
    {
      imgSrc: "./images/laptop1.jpg",
      price: "1600",
      name: "Lenovo IdeaPad 3",
      category: "Laptops",
    },
    {
      imgSrc: "./images/phone1.jpg",
      price: "160",
      name: "Tracfone Blu View 4G LTE Prepaid",
      category: "SmartPhones",
    },
  ];

  test("It should return products sorted by price from high to low", () => {
    const actual = filterByPriceHighToLow(productsData);
    const expected = [
      {
        imgSrc: "./images/laptop1.jpg",
        price: "1600",
        name: "Lenovo IdeaPad 3",
        category: "Laptops",
      },
      {
        imgSrc: "./images/phone1.jpg",
        price: "160",
        name: "Tracfone Blu View 4G LTE Prepaid",
        category: "SmartPhones",
      },
      {
        imgSrc: "./images/camera1.jpg",
        price: "65",
        name: "Video Camera Camcorder",
        category: "Cameras",
      },
      {
        imgSrc: "./images/headphone1.jpg",
        price: "10",
        name: "Sony ZX Series Wired On-Ear Headphones",
        category: "Headphones",
      },
    ];

    expect(actual).toEqual(expected);
  });
});

// Test filter products when search, and by category
describe("test filter products when search, and when filtered by category", () => {
  let productsData = [
    {
      imgSrc: "./images/camera1.jpg",
      price: "65",
      name: "Video Camera Camcorder",
      category: "Cameras",
    },
    {
      imgSrc: "./images/headphone1.jpg",
      price: "10",
      name: "Sony ZX Series Wired On-Ear Headphones",
      category: "Headphones",
    },
    {
      imgSrc: "./images/laptop1.jpg",
      price: "1600",
      name: "Lenovo IdeaPad 3",
      category: "Laptops",
    },
    {
      imgSrc: "./images/phone1.jpg",
      price: "160",
      name: "Tracfone Blu View 4G LTE Prepaid",
      category: "SmartPhones",
    },
  ];

  test("It should return only entered product's category", () => {
    const actual = filterProducts("cameras", productsData);
    const expected = [
      {
        imgSrc: "./images/camera1.jpg",
        price: "65",
        name: "Video Camera Camcorder",
        category: "Cameras",
      },
    ];

    expect(actual).toEqual(expected);
  });
});

// Test removing product from products data array by seller
describe("test removing product from products data array by seller", () => {
  let productsData = [
    {
      imgSrc: "./images/camera1.jpg",
      price: "65",
      name: "Video Camera Camcorder",
      category: "Cameras",
    },
    {
      imgSrc: "./images/headphone1.jpg",
      price: "10",
      name: "Sony ZX Series Wired On-Ear Headphones",
      category: "Headphones",
    },
    {
      imgSrc: "./images/laptop1.jpg",
      price: "1600",
      name: "Lenovo IdeaPad 3",
      category: "Laptops",
    },
    {
      imgSrc: "./images/phone1.jpg",
      price: "160",
      name: "Tracfone Blu View 4G LTE Prepaid",
      category: "SmartPhones",
    },
  ];

  test("It should remove the input product from the array", () => {
    const actual = removeProductFromProductsData(
      productsData,
      "Video Camera Camcorder"
    );
    const expected = [
      {
        imgSrc: "./images/headphone1.jpg",
        price: "10",
        name: "Sony ZX Series Wired On-Ear Headphones",
        category: "Headphones",
      },
      {
        imgSrc: "./images/laptop1.jpg",
        price: "1600",
        name: "Lenovo IdeaPad 3",
        category: "Laptops",
      },
      {
        imgSrc: "./images/phone1.jpg",
        price: "160",
        name: "Tracfone Blu View 4G LTE Prepaid",
        category: "SmartPhones",
      },
    ];

    expect(actual).toEqual(expected);
  });
});

// Test adding product to products data array by seller
describe("test adding product to products data array by seller", () => {
  let productsData = [
    {
      imgSrc: "./images/camera1.jpg",
      price: "65",
      name: "Video Camera Camcorder",
      category: "Cameras",
    },
    {
      imgSrc: "./images/headphone1.jpg",
      price: "10",
      name: "Sony ZX Series Wired On-Ear Headphones",
      category: "Headphones",
    },
    {
      imgSrc: "./images/laptop1.jpg",
      price: "1600",
      name: "Lenovo IdeaPad 3",
      category: "Laptops",
    },
    {
      imgSrc: "./images/phone1.jpg",
      price: "160",
      name: "Tracfone Blu View 4G LTE Prepaid",
      category: "SmartPhones",
    },
  ];

  test("It should add the entered product to products array", () => {
    let item = {
      imgSrc: "./images/phone5.jpg",
      price: "160",
      name: "Nokia G10",
      category: "SmartPhones",
    };
    const actual = addProductToProductsArray(productsData, item);
    const expected = [
      {
        imgSrc: "./images/camera1.jpg",
        price: "65",
        name: "Video Camera Camcorder",
        category: "Cameras",
      },
      {
        imgSrc: "./images/headphone1.jpg",
        price: "10",
        name: "Sony ZX Series Wired On-Ear Headphones",
        category: "Headphones",
      },
      {
        imgSrc: "./images/laptop1.jpg",
        price: "1600",
        name: "Lenovo IdeaPad 3",
        category: "Laptops",
      },
      {
        imgSrc: "./images/phone1.jpg",
        price: "160",
        name: "Tracfone Blu View 4G LTE Prepaid",
        category: "SmartPhones",
      },
      {
        imgSrc: "./images/phone5.jpg",
        price: "160",
        name: "Nokia G10",
        category: "SmartPhones",
      },
    ];

    expect(actual).toEqual(expected);
  });
});

// Test editing existing product image, price, category
describe("test editing existing product's name, price, category", () => {
  let productsData = [
    {
      imgSrc: "./images/camera1.jpg",
      price: "65",
      name: "Video Camera Camcorder",
      category: "Cameras",
    },
    {
      imgSrc: "./images/headphone1.jpg",
      price: "10",
      name: "Sony ZX Series Wired On-Ear Headphones",
      category: "Headphones",
    },
    {
      imgSrc: "./images/laptop1.jpg",
      price: "1600",
      name: "Lenovo IdeaPad 3",
      category: "Laptops",
    },
    {
      imgSrc: "./images/phone1.jpg",
      price: "160",
      name: "Tracfone Blu View 4G LTE Prepaid",
      category: "SmartPhones",
    },
  ];

  test("It should edit the information of the product", () => {
    let item = {
      imgSrc: "./images/camera1.jpg",
      price: "100",
      name: "Video Camera Camcorder",
      category: "Cameras",
    };
    const actual = editProductsData(productsData, item);
    const expected = [
      {
        imgSrc: "./images/camera1.jpg",
        price: "100",
        name: "Video Camera Camcorder",
        category: "Cameras",
      },
      {
        imgSrc: "./images/headphone1.jpg",
        price: "10",
        name: "Sony ZX Series Wired On-Ear Headphones",
        category: "Headphones",
      },
      {
        imgSrc: "./images/laptop1.jpg",
        price: "1600",
        name: "Lenovo IdeaPad 3",
        category: "Laptops",
      },
      {
        imgSrc: "./images/phone1.jpg",
        price: "160",
        name: "Tracfone Blu View 4G LTE Prepaid",
        category: "SmartPhones",
      },
    ];

    expect(actual).toEqual(expected);
  });
});
