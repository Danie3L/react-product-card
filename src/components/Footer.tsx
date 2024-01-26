import { styled } from "styled-components";
type FooterProps = {
  totalItemsCount: number;
  totalPrice: number;
};
const StyledDiv = styled.div`
  margin-left: 20px;
`;
const StyledButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  border: 1px solid #ddd;
`;

export default function Footer({ totalItemsCount, totalPrice }: FooterProps) {
  return (
    <footer>
      <StyledDiv>
        <p>
          Total items: <span>{totalItemsCount}</span>
        </p>
        <p>
          Total price: <span>${totalPrice}</span>
        </p>
        <StyledButton>View Cart</StyledButton>
      </StyledDiv>
    </footer>
  );
}
