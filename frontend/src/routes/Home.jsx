import React from "react";
import NavBar from "../components/NavBar";
import LatestRecipes from "../components/recipe_card/LatestRecipes";
import TipsCard from "../components/tips_card/TipsCard";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="grid grid-cols-2 gap-4">
          <LatestRecipes></LatestRecipes>
      </div>
    </div>
  );
};

export default Home;
