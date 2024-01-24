import { styled } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeading = styled.h1`
  font-size: 30px;
  text-transform: uppercase;
  margin-left: 20px;
`;

const StyledDiv = styled.div`
  margin-right: 20px;
`;

const StyledButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  border: 1px solid #ddd;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeading>Acme Co.</StyledHeading>
      <StyledDiv>
        <p>
          Total items: <span>0</span>
        </p>
        <p>
          Total price: <span>$0.00</span>
        </p>
        <StyledButton>View Cart</StyledButton>
      </StyledDiv>
    </StyledHeader>
  );
}
