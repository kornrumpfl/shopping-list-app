import styled from "styled-components";

export default function ShoppingList({ shoppingList, onDelete }) {
  return (
    <Div>
      <UlShoppingList>
        {shoppingList.map(item => {
          return (<li 
          onClick={() => onDelete(item._id)}>
            {item.name.en}
            </li>);
        })}
      </UlShoppingList>
    </Div>
  );
}

const UlShoppingList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 800px;
  list-style: none;
  li {
    background-color: #d2daff;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
`;
