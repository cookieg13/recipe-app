import './App.css';
import {API_KEY, API_ID} from './constants.js'
import axios from 'axios';
import { useState } from 'react';



function App() {
  const [query, setQuery] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  var url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;
  async function getRecipes(){
  var result = await axios.get(url)
  setRecipeList(result.data.hits)
  }
  function onSubmit (ev){
      ev.preventDefault();
  }
  function onChange (ev){
    setQuery(ev.target.value);
  }
  return (
    <div className="App">
      <h1 className="header">
      Hello Debarati! 🍕
      </h1>
      <form className="form" onSubmit={onSubmit}>
             <input  value={query} onChange={onChange} placeholder='Enter ingredient name ...' type="search" id="form1" class="form-control"></input>
  <button onClick={getRecipes} type="button" class="btn btn-primary">Search</button>
      </form>
      <div className="grid-container">
        {recipeList.map(recipe=> 
        <div className="grid-children">
        <img className="recipe-img" src={recipe["recipe"]["image"]}/>
          <p className="recipe-nm">{recipe["recipe"]["label"]}</p>
        </div>
       
        )}
      </div>
    </div>
  );
}

export default App;
