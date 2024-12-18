import { useState, useEffect } from "react";
import Card from "../Card/Card";

const ArticleHero = () => {
  const [articles, setArticles] = useState();

  const [url, setUrl] = useState(
    "https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=6"
  );

  useEffect(() => {
    const fetchArticles = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    };
    fetchArticles(url);
  }, [url]);

  const [pageCount, setPageCount] = useState(1);

  // Next Click
  const handleNextClick = (url) => {
    setUrl(url);
    setPageCount(pageCount + 1);
  };

  // Previous Click
  const handlePreviousClick = (url) => {
    setUrl(url);
    setPageCount(pageCount - 1);
  };

  return (
    <div>
      <div className="container mx-auto px-5 py-10">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles?.results.map((article) => (
            <Card key={article.id} content={article} />
          ))}
        </div>
        <div className="flex justify-around mt-8 items-center">
          <button
            onClick={() => handlePreviousClick(articles?.previous)}
            className="bg-accentColorHover hover:bg-gray-500 text-white px-4 py-2 rounded disabled:bg-gray-500"
            disabled={articles?.previous === null}
          >
            <i className="fa-solid fa-angles-left"></i>
          </button>
          <h3 className="text-2xl font-bold text-white mb-6 text-center px-4 py-2">
            {pageCount}
          </h3>
          <button
            onClick={() => handleNextClick(articles?.next)}
            className="bg-accentColorHover hover:bg-gray-500 text-white px-4 py-2 rounded disabled:bg-gray-500"
            disabled={articles?.next === null}
          >
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleHero;
