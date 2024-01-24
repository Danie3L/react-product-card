import styled from "styled-components";

type ProductCardProps = {
  title: string;
  price: number;
  imgSrc: string;
  id?: number;
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
}: ProductCardProps) {
  return (
    <StyledSection>
      <h2>{title}</h2>
      <StyledImage src={imgSrc} alt={title} />
      <span>${price}</span>
      <StyledButton>Add to Cart</StyledButton>
    </StyledSection>
  );
}
