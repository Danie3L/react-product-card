import ProductCard from './ProductCard';
import { productsData } from '../data';
import { styled } from 'styled-components';
import { cartProps } from '../App';
type ProductsSectionProps = {
  setCart: React.Dispatch<React.SetStateAction<cartProps[]>>;
};

export default function ProductsSection({ setCart }: ProductsSectionProps) {
  return (
    <main>
      <article>
        <StyledList>
          {productsData.map((product) => {
            return (
              <StyledListElement key={product.id}>
                <ProductCard {...product} setCart={setCart} />
              </StyledListElement>
            );
          })}
        </StyledList>
      </article>
    </main>
  );
}
const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 500px;
`;
const StyledListElement = styled.li`
  list-style: none;
`;
