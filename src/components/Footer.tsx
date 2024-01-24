import { styled } from "styled-components";

const StyledDiv = styled.div`
  margin-left: 20px;
`;
const StyledButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  border: 1px solid #ddd;
`;

export default function Footer() {
  return (
    <footer>
      <StyledDiv>
        <p>
          Total items: <span>0</span>
        </p>
        <p>
          Total price: <span>$0.00</span>
        </p>
        <StyledButton>View Cart</StyledButton>
      </StyledDiv>
    </footer>
  );
}
