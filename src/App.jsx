import "./App.css";
import Apod from "./components/Apod/APOD";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import Mars from "./secondSection/MarsSection";

// API = aQBBUXeUuBIMUrvGB9QuJl7Ag74ohqsXTmvdgqlD

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Apod></Apod>
    </>
  );
}

export default App;
