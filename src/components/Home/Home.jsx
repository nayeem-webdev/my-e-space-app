import { Outlet } from "react-router-dom";
import Hero from "../Hero/Hero";
import HeroChildTabs from "../HeroChildTabs/HeroChildTabs";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroChildTabs />
      <Outlet />
    </>
  );
};

export default Home;
