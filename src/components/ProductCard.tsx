import styled from "styled-components";
import { cartProps } from "../App";
type ProductCardProps = {
  title: string;
  price: number;
  imgSrc: string;
  id?: number;
  setCart: React.Dispatch<React.SetStateAction<cartProps[]>>;
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px 0;
`;

const StyledButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  margin: 10px 0;
  border: 1px solid #ddd;
`;

export default function ProductCard({
  title,
  price,
  imgSrc,
  setCart,
}: ProductCardProps) {
  function handleClick() {
    setCart((prev) => [...prev, { title, totalPrice: price, imgSrc }]);
  }
  return (
    <StyledSection>
      <h2>{title}</h2>
      <StyledImage src={imgSrc} alt={title} />
      <span>${price}</span>
      <StyledButton onClick={handleClick}>Add to Cart</StyledButton>
    </StyledSection>
  );
}
