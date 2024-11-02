import PropTypes from "prop-types";

const ArticleCard = ({ article }) => {
  console.log(article);
  return (
    <>
      <div className="bg-gray-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative overflow-hidden">
        <img
          src={article?.image_url}
          alt="Article Title"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3
          className="text-xl font-semibold text-white mt-4 h-14 overflow-hidden"
          title={article?.title}
        >
          {article?.title}
        </h3>
        <p className="text-gray-400 h-12 overflow-hidden">{article?.summary}</p>
        <p className="text-gray-500 text-sm mt-2">
          Published on: {article?.published_at}
        </p>

        {article?.featured && (
          <span className="absolute top-3 right-3 bg-accentColor2 text-white text-xs font-semibold px-2 py-1 rounded flex items-center shadow-md">
            <i className="fas fa-star mr-1"></i> Featured
          </span>
        )}
        <a
          href={article?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accentColorHover hover:text-gray-500 mt-4 inline-block font-semibold"
        >
          Read More &gt;
        </a>
      </div>
    </>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object,
};

export default ArticleCard;
