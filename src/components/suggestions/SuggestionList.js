import styled from "styled-components"

export default function SuggestionList({items}){

return(
    <Div>
    <UlSuggestions>
        {items.map(item=>{
            return(
                <li>
                    {item.name.en}
                </li>
            );
        })}
    </UlSuggestions>
    </Div>
);

}

const UlSuggestions = styled.ul`
    display:flex;
    justify-content:space-evenly;
    flex-direction:row;
    flex-wrap:wrap;
    max-width:800px;
    list-style:none;
li{
    background-color:greenyellow;
    border-radius:50%;
    padding:10px;
    margin:10px;
}
`
const Div = styled.div`
display:flex;
justify-content:center;
`
