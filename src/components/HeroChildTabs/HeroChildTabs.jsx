import { NavLink } from "react-router-dom";

const HeroChildTabs = () => {
  return (
    <div className="container mx-auto px-5 flex justify-around mt-20">
      <NavLink
        className={({ isActive }) =>
          `${
            isActive
              ? "text-center w-full border-t-2 border-r-2 border-l-2 py-2 rounded-tr-xl rounded-tl-xl font-bold "
              : "text-center w-full border-b-2 py-2"
          }`
        }
        to={"/"}
      >
        Articles
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${
            isActive
              ? "text-center w-full border-t-2 border-r-2 border-l-2 py-2 rounded-tr-xl rounded-tl-xl font-bold "
              : "text-center w-full border-b-2 py-2"
          }`
        }
        to={"/blogs"}
      >
        Blogs
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${
            isActive
              ? "text-center w-full border-t-2 border-l-2 border-r-2 py-2 rounded-tr-xl rounded-tl-xl font-bold "
              : "text-center w-full border-b-2 py-2"
          }`
        }
        to={"/reports"}
      >
        Reports
      </NavLink>
    </div>
  );
};

export default HeroChildTabs;
