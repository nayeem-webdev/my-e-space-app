import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticleHero = () => {
  const [Articles, setArticles] = useState();
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

  const handleNextClick = (url) => {
    setUrl(url);
    setPageCount(pageCount + 1);
  };
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
          {Articles?.results.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <div className="flex justify-around mt-8 items-center">
          <button
            onClick={() => handlePreviousClick(Articles?.previous)}
            className="bg-accentColorHover hover:bg-gray-500 text-white px-4 py-2 rounded disabled:bg-gray-500"
            disabled={Articles?.previous === null}
          >
            <i className="fa-solid fa-angles-left"></i>
          </button>
          <h3 className="text-2xl font-bold text-white mb-6 text-center px-4 py-2">
            {pageCount}
          </h3>
          <button
            onClick={() => handleNextClick(Articles?.next)}
            className="bg-accentColorHover hover:bg-gray-500 text-white px-4 py-2 rounded disabled:bg-gray-500"
            disabled={Articles?.next === null}
          >
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleHero;
