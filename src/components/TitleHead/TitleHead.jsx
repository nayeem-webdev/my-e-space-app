import PropTypes from "prop-types";

const TitleHead = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className="text-center text-5xl font-semibold mb-5">{title}</h1>
      <p className="text-center w-2/3 mx-auto">{subtitle}</p>
    </div>
  );
};
TitleHead.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default TitleHead;
