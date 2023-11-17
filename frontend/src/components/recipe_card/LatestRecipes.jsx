import React from "react";
import RecipeCard from "./RecipeCard";

const LatestRecipes = () => {
  return (
    <div className="flex flex-col  m-4 w-1/2">
      <h1 className="flex justify-center mt-2 font-bold">Latest Recipes</h1>
      <div className="flex flex-row justify-center">
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  );
};

export default LatestRecipes;
