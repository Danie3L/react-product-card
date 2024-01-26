type productsDataProps = {
  title: string;
  price: number;
  imgSrc: string;
  id: number;
};

export const productsData: productsDataProps[] = [
  {
    title: "Widget",
    price: 9.99,
    imgSrc: "/src/assets/widget-1.jpg",
    id: 0,
  },
  {
    title: "Premium Widget",
    price: 19.99,
    imgSrc: "/src/assets/widget-2.jpg",
    id: 1,
  },
  {
    title: "Deluxe Widget",
    price: 29.99,
    imgSrc: "/src/assets/widget-3.jpg",
    id: 2,
  },
];
