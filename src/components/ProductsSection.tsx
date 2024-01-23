import ProductCard from "./ProductCard";
import { productsData } from "../data";
export default function ProductsSection() {
  return (
    <main>
      <article>
        <ul>
          {productsData.map((product) => {
            return (
              <li key={product.id}>
                <ProductCard {...product} />
              </li>
            );
          })}
        </ul>
      </article>
    </main>
  );
}
