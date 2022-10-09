import styled from "styled-components";

export default function SuggestionList({ key, items, addShoppingList }) {
  console.log(items);
  return (
    <Div>
      {/*         {(()=>{
            if (items.lenght>125){
                return(<div>null</div>)
            }else if (items.lenght===0){
                return(<div><p>We could not find what you were looking for! For that we are truly sorry!</p></div>)
            }else{ */}
      <UlSuggestions>
        {items.map((item) => {
          return (
            <li onClick={() => addShoppingList(item._id)}>{item.name.en}</li>
          );
        })}
      </UlSuggestions>
      {/*             }
        })()} */}
    </Div>
  );
}

const UlSuggestions = styled.ul`
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
