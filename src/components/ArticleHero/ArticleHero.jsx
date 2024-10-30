import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticleHero = () => {
  const [Articles, setArticles] = useState();
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=6&offset=6"
        );
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    };
    fetchArticles();
  }, []);
  return (
    <div>
      <div className="container mx-auto px-5 py-10">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Articles?.results.map((article) => {
            <ArticleCard key={article.id} article={article}></ArticleCard>;
          })}
        </div>
        <div className="flex justify-around mt-8">
          <button className="bg-accentColorHover hover:bg-gray-500 text-white px-4 py-2 rounded">
            <i className="fa-solid fa-angles-left"></i>
          </button>
          <button className="bg-accentColorHover hover:bg-gray-500 text-white px-4 py-2 rounded">
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleHero;
