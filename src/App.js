import "./App.css";
import { useState, useEffect } from "react";
import FuzzySearch from "fuzzy-search";
import SuggestionList from "./components/SuggestionList";
import ShoppingList from "./components/ShoppingList";
import {saveToLocal,loadFromLocal} from "../src/components/LocalStorage"



function App() {

const [shoppingList, setShoppingList] = useState(loadFromLocal("shoppingList") ?? []);
const [fetchData, setFetchData]=useState([]);
const [items,setItems]=useState([]);
    
useEffect(()=>{
  saveToLocal("shoppingList",shoppingList);
},[shoppingList])


useEffect(() => {
      async function getData() {  
        const response = await fetch(`https://fetch-me.vercel.app/api/shopping/items`);
        let actualData = await response.json();
        setFetchData(actualData.data)
      }
      getData();
},[])

function addShoppingList(itemId){
  setShoppingList([items.filter(item => itemId === item._id), ...shoppingList]);
}
 
function onDelete(cardId){
  setShoppingList(shoppingList.filter(({_id}) => cardId !== _id));
}
function makeSearch(itemName) {
      const searcher = new FuzzySearch(fetchData, ["name.en"],{
        caseSensitive: false,
      });
      console.log(fetchData)
      setItems(searcher.search(itemName))
}
  return (
    <div className="App">
      <h1>Shopping List App</h1>
{/* shopping list items */}
      <div>
        <ShoppingList 
        shoppingList={shoppingList}
        onDelete={onDelete}
        />
      </div>
{/* text input */}
      <input
        type="search"
        onChange={(e) => makeSearch(e.target.value)}
        placeholder="type what you want here"
      />
{/* search results */}
      <div>
        <SuggestionList 
        items={items}
        addShoppingList={addShoppingList}
        />
      </div>
    </div>
  );
}

export default App;
