import "./Apod.css";
import { useEffect, useState } from "react";

const Apod = () => {
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
  return (
    <>
      <div className="apodMainDiv">
        <h1 className="textCenter">Astronomy Picture of the Day</h1>
        <p className="textCenter width60 mxAuto">
          Each day a different image or photograph of our fascinating universe
          is featured, along with a brief explanation written by a professional
          astronomer.
        </p>
        <div className="apodInfoDiv container"> 
          <div className="width50">
            <img src={APOD?.url} alt="" />
            <p className="DC">Date: {APOD?.date}, Copyright: {APOD?.copyright} </p>
          </div>
          <div className="width50">
            <h2 className="spaceF">{APOD?.title}</h2>
            <p>{APOD?.explanation}</p>
            <br />
            <a href={APOD?.hdurl}><button className="accentButton">View HD Image</button></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apod;
