import ProductCard from "./ProductCard";
import { productsData } from "../data";
export default function ProductsSection() {
  return (
    <main>
      <article>
        <h1>hi</h1>
        <ul>
          {productsData.map((product) => {
            return (
              <li>
                <ProductCard key={product.id} {...product} />
              </li>
            );
          })}
        </ul>
      </article>
    </main>
  );
}
