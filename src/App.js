import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = "155a5e94";
  const APP_KEY = "0195636f5143ad4d2e81b063432cafdd ";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('banana');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const searchRecipe = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={searchRecipe}>
        <input className="search-text" type="text" value={search} onChange={updateSearch} />
        <button className="search-submit" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        img={recipe.recipe.image}
        ingL={recipe.recipe.ingredientLines} />
      ))}
      </div>
    </div>
  );
};

export default App;
