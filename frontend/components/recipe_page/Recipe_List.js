import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllRecipes } from "../../src/api/recipeApi";
import RecipeCard from "../recipe_card/RecipeCard";

const Recipe_List = () => {
  const { data, isError, error } = useQuery({
    queryKey: ["all-recipes"], //used to cache data yielded by request
    queryFn: fetchAllRecipes,
  });

  let content;

  if(isError) {
    console.log(error)
    content = <p> error retrieving recipes</p>
  }

  if(data) {
    content = (
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2 xl:grid-cols-3 mx-32 my-12">
       {data.map((recipe) => (
            <RecipeCard imageId={recipe.imageId} title={recipe.title}></RecipeCard>
        ))}
        </div>
    );
  }
  //If screen is small then print 1-2 recipe cards per row
  //Larger then 3 or 4.

  return <div>{content}</div>;
};

export default Recipe_List;
