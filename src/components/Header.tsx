import { styled } from 'styled-components';

type HeaderProps = {
  totalItemsCount: number;
  totalPrice: number;
  setIsCartViewActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({
  totalItemsCount,
  totalPrice,
  setIsCartViewActive,
}: HeaderProps) {
  function handleClick() {
    setIsCartViewActive((prev) => !prev);
  }
  return (
    <StyledHeader>
      <StyledHeading>Acme Co.</StyledHeading>
      <StyledDiv>
        <p>
          Total items: <span>{totalItemsCount}</span>
        </p>
        <p>
          Total price: <span>${totalPrice}</span>
        </p>
        <StyledButton onClick={handleClick}>View Cart</StyledButton>
      </StyledDiv>
    </StyledHeader>
  );
}
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
