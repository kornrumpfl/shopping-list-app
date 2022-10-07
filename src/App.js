import "./App.css";
import { useState, useEffect } from "react";
import FuzzySearch from "fuzzy-search";
import SuggestionList from "./components/suggestions/SuggestionList";


function App() {

const [shoppingList, setShoppingList] = useState(0);
const [fetchData, setFetchData]=useState([]);
const [items,setItems]=useState([]);
    

useEffect(() => {
      async function getData() {  
        const response = await fetch(`https://fetch-me.vercel.app/api/shopping/items`);
        let actualData = await response.json();
        setFetchData(actualData.data);
        console.log(fetchData);
      }
      getData();
},[])
 
function makeSearch(itemName) {
      console.log(itemName)
      const searcher = new FuzzySearch(fetchData, ["name.en", "id"],{
        caseSensitive: true,
      });
      setItems(searcher.search(itemName));
      console.log(searcher.search(itemName));
}
  return (
    <div className="App">
      <h1>Shopping List App</h1>
      {/* shopping list items */}
      <div>{shoppingList}</div>
      {/* text input */}
      <input
        type="search"
        onChange={(e) => makeSearch(e.target.value)}
        placeholder="type what you want here"
      />
      {/* search results */}
      <div>
        <SuggestionList items={items}/>
      </div>
    </div>
  );
}

export default App;
