import { cartProps } from '../App';
import styled from 'styled-components';
type CartProps = {
  cart: cartProps[];
  setCart: React.Dispatch<React.SetStateAction<cartProps[]>>;
};
type EventType = {
  target: HTMLSelectElement;
};
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
const StyledSelect = styled.select`
  flex-basis: 20%;
  height: 30px;
`;

function renderSelect() {
  return Array.from({ length: 20 }, (_, i) => (
    <option key={i} value={i + 1}>
      {i + 1}
    </option>
  ));
}

export default function Cart({ cart, setCart }: CartProps) {
  function handleSelect(title: string, e: EventType) {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.title === title) {
          return {
            ...item,
            quantity: Number(e.target.value),
          };
        } else {
          return item;
        }
      });
    });
  }
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
                <StyledSelect
                  onChange={(e) => handleSelect(product.title, e)}
                  name='quantity'
                  id=''
                >
                  <option value=''>{product.quantity}</option>
                  {renderSelect()}
                </StyledSelect>
                <StyledParagraph $margin>
                  Total Price: ${product.totalPrice * product.quantity}
                </StyledParagraph>
              </StyledDiv>
            </StyledListItem>
          );
        })}
      </StyledList>
    </section>
  );
}
