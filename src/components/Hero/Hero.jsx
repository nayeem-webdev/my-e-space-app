import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      ? `url(${APOD.url})`
      : "url('/src/assets/space.jpg')",
  };
  return (
    <>
      <div className="px-5 bg-no-repeat bg-cover bg-bottom" style={heroStyle}>
        <div className="container h-screen flex items-center justify-center w-full max-h-screen">
          <div className="mt-20 w-3/5">
            <h4 className="text-2xl">Astronomy Picture of the Day</h4>
            <h1 className="font-semibold mt-5 mb-10 text-6xl">{APOD?.title}</h1>
            <Link to={"/apod"}>
              <button className="accentButton">
                More Details <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
          <div className="w-2/5"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
