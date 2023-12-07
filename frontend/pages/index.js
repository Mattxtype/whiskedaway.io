import NavBar from "../components/NavBar";
import AboutMeBanner from "../components/about_banner/AboutMeBanner";
import LatestRecipes from "../components/recipe_card/LatestRecipes";
import TipsCard from "../components/tips_card/TipsCard";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="grid grid-cols-2 gap-4">
        <LatestRecipes></LatestRecipes>
        <TipsCard></TipsCard>
      </div>
      <div className="mx-20 rounded-2xl my-4">
        <AboutMeBanner></AboutMeBanner>
      </div>
    </div>
  );
};

export default Home;
