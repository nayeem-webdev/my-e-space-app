import PropTypes from "prop-types";

const Card = ({ content }) => {
  return (
    <>
      <div className="bg-gray-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative overflow-hidden">
        <img
          src={content?.image_url}
          alt="Title"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3
          className="text-xl font-semibold text-white mt-4 h-14 overflow-hidden"
          title={content?.title}
        >
          {content?.title}
        </h3>
        <p className="text-gray-400 h-12 overflow-hidden">{content?.summary}</p>
        <p className="text-gray-500 text-sm mt-2">
          Published on: {content?.published_at}
        </p>

        {content?.featured && (
          <span className="absolute top-3 right-3 bg-accentColor2 text-white text-xs font-semibold px-2 py-1 rounded flex items-center shadow-md">
            <i className="fas fa-star mr-1"></i> Featured
          </span>
        )}
        <a
          href={content?.url}
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

Card.propTypes = {
  content: PropTypes.object,
};

export default Card;
