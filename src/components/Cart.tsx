import { cartProps } from '../App';
import styled from 'styled-components';
import CartSelect from './CartSelect';
type CartProps = {
  cart: cartProps[];
  setCart: React.Dispatch<React.SetStateAction<cartProps[]>>;
};

export default function Cart({ cart, setCart }: CartProps) {
  return (
    <section>
      <StyledList>
        {cart.map((product, index) => {
          return (
            <StyledListItem key={index}>
              <img style={imgStyles} src={product.imgSrc} alt={product.title} />
              <StyledDiv>
                <StyledHeading>{product.title}</StyledHeading>
                <StyledParagraph>Price: {product.totalPrice}</StyledParagraph>
                <CartSelect product={product} setCart={setCart} />
                <StyledParagraph $margin>
                  Total Price: $
                  {(product.totalPrice * product.quantity).toFixed(2)}
                </StyledParagraph>
              </StyledDiv>
            </StyledListItem>
          );
        })}
      </StyledList>
    </section>
  );
}
const imgStyles = {
  width: '100px',
  height: '100px',
};
const StyledList = styled.ul`
  border-bottom: 2px solid #ddd;
`;
const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`;

const StyledHeading = styled.h1`
  flex-basis: 30%;
  margin-left: 20px;
`;

const StyledParagraph = styled.p<{ $margin?: boolean }>`
  flex-basis: 20%;
  font-size: 20px;
  margin-left: ${(props) => (props.$margin ? '60px' : '0px')};
`;
