let productsDataStorage = JSON.parse(localStorage.getItem("productsData"));

// product: photo, price, name, category
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
  {
    imgSrc: "./images/camera2.jpg",
    price: "1800",
    name: "Samsung WB35F",
    category: "Cameras",
  },
  {
    imgSrc: "./images/headphone2.jpg",
    price: "127",
    name: "Beats Studio3 Wireless Noise Cancelling",
    category: "Headphones",
  },
  {
    imgSrc: "./images/laptop2.jpg",
    price: "480",
    name: "Lenovo IdeaPad 3 Laptop",
    category: "Laptops",
  },
  {
    imgSrc: "./images/phone2.jpg",
    price: "1000",
    name: "Samsung Galaxy S21 FE",
    category: "SmartPhones",
  },
  {
    imgSrc: "./images/camera3.jpg",
    price: "800",
    name: "DMC-FZ2000",
    category: "Cameras",
  },
  {
    imgSrc: "./images/headphone3.jpg",
    price: "15",
    name: "Kids Headphones",
    category: "Headphones",
  },
  {
    imgSrc: "./images/laptop3.jpg",
    price: "262",
    name: "ASUS Laptop L5",
    category: "Laptops",
  },
  {
    imgSrc: "./images/phone3.jpg",
    price: "300",
    name: "Motorola one 5G ACE",
    category: "SmartPhones",
  },
  {
    imgSrc: "./images/camera4.jpg",
    price: "320",
    name: "LUMIx FZ82",
    category: "Cameras",
  },
  {
    imgSrc: "./images/headphone4.jpg",
    price: "180",
    name: "Apple Aripods",
    category: "Headphones",
  },
  {
    imgSrc: "./images/laptop4.jpg",
    price: "1000",
    name: "Touch screen laptop",
    category: "Laptops",
  },
  {
    imgSrc: "./images/phone4.jpg",
    price: "160",
    name: "Tracfone Samsung Galaxy A12",
    category: "SmartPhones",
  },
  {
    imgSrc: "./images/camera5.jpg",
    price: "800",
    name: "Sony Alpha a6000",
    category: "Cameras",
  },
  {
    imgSrc: "./images/headphone5.jpg",
    price: "32",
    name: "Artix CL750 Wired Headphones",
    category: "Headphones",
  },
  {
    imgSrc: "./images/laptop5.jpg",
    price: "100",
    name: "HP Chromebook",
    category: "Laptops",
  },
  {
    imgSrc: "./images/phone5.jpg",
    price: "160",
    name: "Nokia G10",
    category: "SmartPhones",
  },
];

localStorage.setItem(
  "productsData",
  JSON.stringify(productsDataStorage ? productsDataStorage : productsData)
);
