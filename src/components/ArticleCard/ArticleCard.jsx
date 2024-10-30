const ArticleCard = ({ article }) => {
  console.log(article);
  return (
    <>
      <div className="bg-gray-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative overflow-hidden">
        <img
          src="https://via.placeholder.com/150"
          alt="Article Title"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-white mt-4">Article Title</h3>
        <p className="text-gray-400">
          Brief summary of the article goes here. This is where you capture the
          reader&lsquo;s interest.
        </p>
        <p className="text-gray-500 text-sm mt-2">Published on: YYYY-MM-DD</p>

        <span className="absolute top-3 right-3 bg-accentColor2 text-white text-xs font-semibold px-2 py-1 rounded flex items-center shadow-md">
          <i className="fas fa-star mr-1"></i> Featured
        </span>

        <a
          href="https://example.com/article"
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

export default ArticleCard;
