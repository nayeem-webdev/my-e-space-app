import { useEffect, useState } from "react";
import TitleHead from "../TitleHead/TitleHead";

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

  const d = new Date();
  const startDate =
    d.getFullYear() + "-" + d.getMonth() + 1 + "-" + d.getDate() - 20;
  const endDate = d.getFullYear() + "-" + d.getMonth() + 1 + "-" + d.getDate();

  console.log(endDate, startDate);

  // https://api.nasa.gov/planetary/apod?api_key=aQBBUXeUuBIMUrvGB9QuJl7Ag74ohqsXTmvdgqlD&start_date=2023-10-01&end_date=2023-10-05

  return (
    <>
      <div className="px-5 py-28 container mx-auto">
        <TitleHead
          title={"Astronomy Picture of the Day"}
          subtitle={
            "Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer."
          }
        />
        <div className="mt-8 flex gap-8 ">
          <div className="w-1/2">
            <img className="" src={APOD?.url} alt="" />
            <p className="mt-3 font-bold text-center ">
              Date: {APOD?.date}, Copyright: {APOD?.copyright}{" "}
            </p>
          </div>
          <div className="w-1/2">
            <h2 className="font-semibold text-3xl mb-3">{APOD?.title}</h2>
            <p className="leading-relaxed">{APOD?.explanation}</p>
            <br />
            <a href={APOD?.hdurl} target="_blank">
              <button className="accentButton mr-5">View HD Image</button>
            </a>
            <button className="accentButton ">
              Add to favorites{" "}
              <i className="ml-2 rotate-180 fa-brands fa-space-awesome"></i>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apod;
