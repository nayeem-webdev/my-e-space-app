import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const MarsHero = () => {
  return (
    <section className="container mx-auto  px-5 py-40 bg-marsHero bg-no-repeat bg-cover bg-center">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-10 text-gray-900">
          Discover Mars Through the Eyes of NASA's Rovers
        </h1>

        <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-3xl mx-auto">
          Explore high-definition images captured by Curiosity, Opportunity, and
          Spirit as they traverse the Martian surface. Dive into Mars' mysteries
          and uncover new perspectives of the Red Planet.
        </p>
        <Link
          to={"/mars-rover"}
          className="inline-block px-8 py-4 bg-[rgb(253,58,24)] text-white rounded-full font-semibold text-lg transition-transform transform hover:scale-105 hover:bg-[rgb(253,89,58)]"
        >
          View Mars Photos
        </Link>
      </div>
    </section>
  );
};

export default MarsHero;
