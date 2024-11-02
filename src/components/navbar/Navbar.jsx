import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navItems = [
    { id: "1", name: "home", label: "Home", filePath: "/" },
    { id: "2", name: "apod", label: "APOD", filePath: "/apod" },
    {
      id: "3",
      name: "marsRover",
      label: "Mars Rover",
      filePath: "/mars-rover",
    },
    {
      id: "4",
      name: "imageSearch",
      label: "Image Search",
      filePath: "/image-search",
    },
  ];

  return (
    <>
      <div className="w-full fixed py-5 bg-opacity-70 bg-gray-900 backdrop-blur-md z-50">
        <div className=" container mx-auto px-5 flex justify-between items-center">
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer text-2xl font-bold text-white"
          >
            <h1>E-SPACE</h1>
          </div>
          <nav>
            <ul className="flex gap-8 list-none">
              {navItems.map((navItem) => (
                <NavLink
                  key={navItem.id}
                  to={navItem.filePath}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "font-bold text-accentColor2"
                        : "hover:text-accentColor2"
                    }`
                  }
                >
                  {navItem.label}
                </NavLink>
              ))}
            </ul>
          </nav>
          <button className="bg-accentColor2 text-white font-semibold px-4 py-2 rounded hover:bg-accentColorHover">
            Favorites <i className="fa-solid fa-rocket"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
