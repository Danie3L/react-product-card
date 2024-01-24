import ProductCard from "./ProductCard";
import { productsData } from "../data";
import { styled } from "styled-components";

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 500px;
`;
const StyledListElement = styled.li`
  list-style: none;
`;
export default function ProductsSection() {
  return (
    <main>
      <article>
        <StyledList>
          {productsData.map((product) => {
            return (
              <StyledListElement key={product.id}>
                <ProductCard {...product} />
              </StyledListElement>
            );
          })}
        </StyledList>
      </article>
    </main>
  );
}
