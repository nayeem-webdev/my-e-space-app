const MarsImageCard = () => {
  return (
    <div className="bg-[#2f3c4d] rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img
          src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NLB_486265119EDR_S0481570NCAM00546M_.JPG"
          alt="Mars Rover Image"
          className="w-full h-56 object-cover"
        />

        <button
          title="Add To Favorites"
          className="absolute h-10 w-10 bottom-3 right-3 bg-white text-gray-600 p-2 rounded-full shadow-lg hover:text-accentColor2 transition duration-200"
        >
          <i className="fa-solid fa-rocket"></i>
        </button>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-3">Curiosity</h3>
        <p className="text-md text-gray-300">Sol: 1000 | Date: 2015-05-30</p>
        <p className="text-md text-accentColorHover mt-2">
          {" "}
          Camera: Navigation Camera (NAVCAM)
        </p>
      </div>
    </div>
  );
};

export default MarsImageCard;
