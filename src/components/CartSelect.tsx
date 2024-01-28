import styled from 'styled-components';
import { cartProps } from '../App';

type CartSelectProps = {
  product: cartProps;
  setCart: React.Dispatch<React.SetStateAction<cartProps[]>>;
};
type EventType = {
  target: HTMLSelectElement;
};
function renderSelect() {
  return Array.from({ length: 20 }, (_, i) => (
    <option key={i} value={i + 1}>
      {i + 1}
    </option>
  ));
}

export default function CartSelect({ product, setCart }: CartSelectProps) {
  function handleSelect(title: string, e: EventType) {
    setCart((prev) => {
      return prev.map((item) => {
        return item.title === title
          ? { ...item, quantity: Number(e.target.value) }
          : item;
      });
    });
  }
  return (
    <StyledSelect onChange={(e) => handleSelect(product.title, e)}>
      <option value=''>{product.quantity}</option>
      {renderSelect()}
    </StyledSelect>
  );
}

const StyledSelect = styled.select`
  flex-basis: 20%;
  height: 30px;
`;
