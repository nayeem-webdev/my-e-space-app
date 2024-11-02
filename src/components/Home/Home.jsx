import { Outlet } from "react-router-dom";
import Hero from "../Hero/Hero";
import HeroChildTabs from "../HeroChildTabs/HeroChildTabs";
import MarsHero from "../MarsHero/MarsHero";
import SubscribeNewsletter from "../SubscribeNewsletter/SubscribeNewsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroChildTabs />
      <Outlet />
      <MarsHero />
      <SubscribeNewsletter />
    </>
  );
};

export default Home;
