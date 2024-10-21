import { useState, useEffect } from "react";
import "./Hero.css";

// API = aQBBUXeUuBIMUrvGB9QuJl7Ag74ohqsXTmvdgqlD
const Hero = () => {
  const [APOD, setAPOD] = useState(null);

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=aQBBUXeUuBIMUrvGB9QuJl7Ag74ohqsXTmvdgqlD"
        );
        const data = await response.json();
        setAPOD(data);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    };
    fetchAPOD();
  }, []);

  const heroStyle = {
    backgroundImage: APOD?.hdurl
      ? `url(${APOD.hdurl})`
      : "url('/src/assets/space.jpg')",
  };
  return (
    <>
      <div className="heroSec" style={heroStyle}>
        <div className="container heroContainer">
          <div className="width60">
            <h4>Astronomy Picture of the Day</h4>
            <h1 className="heroTitle">{APOD?.title}</h1>
            <button className="accentButton">
              More Details <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="width40">
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
