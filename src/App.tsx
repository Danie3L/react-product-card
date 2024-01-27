import Header from './components/Header';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { useState } from 'react';

export type cartProps = {
  title: string;
  totalPrice: number;
  imgSrc: string;
  quantity: number;
};

function deriveTotalItemsCount(data: cartProps[]) {
  return data.length;
}

function deriveTotalPrice(data: cartProps[]) {
  return Number(
    data.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2),
  );
}

function App() {
  const [cart, setCart] = useState<cartProps[]>([]);
  const [isCartViewActive, setIsCartViewActive] = useState(false);
  const totalItemsCount = deriveTotalItemsCount(cart);
  const totalPrice = deriveTotalPrice(cart);
  return (
    <>
      <Header
        totalItemsCount={totalItemsCount}
        totalPrice={totalPrice}
        setIsCartViewActive={setIsCartViewActive}
      />
      {isCartViewActive ? <Cart /> : <ProductsSection setCart={setCart} />}
      <Footer totalItemsCount={totalItemsCount} totalPrice={totalPrice} />
    </>
  );
}

export default App;
