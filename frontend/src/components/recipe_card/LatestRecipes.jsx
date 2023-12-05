import { useQuery } from "@tanstack/react-query";
import React from "react";
import RecipeCard from "./RecipeCard";
import { fetchLatestRecipes } from "../../util/http";

const LatestRecipes = () => {
  const { data, isError, error } = useQuery({
    queryKey: ["latest-recipes"], //used to cache data yielded by request
    queryFn: fetchLatestRecipes,
  });

  let content;

  if (isError) {
    console.log(error);
    content = <p>error</p>;
  }

  if (data) {
    console.log(data);
    content = (
        data.map((recipe) => (
            <RecipeCard imageId={recipe.imageId} title={recipe.title}></RecipeCard>
        ))
    );
  }
  return (
    <div className="flex flex-col w-full my-4 ml-4">
      <h1 className="flex justify-center mt-2 font-bold">Latest Recipes</h1>
      <div className="flex flex-row justify-center">{content}</div>
    </div>
  );
};

export default LatestRecipes;
