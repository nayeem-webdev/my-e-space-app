import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="px-5 py-5 navbar">
        <div className="navContainer">
          <div className="logo">
            <p>E-SPACE</p>
          </div>
          <nav>
            <ul className="navList">
              <li className="navLi">Home</li>
              <li className="navLi">APOD</li>
              <li className="navLi">Mars Rover</li>
              <li className="navLi">Image Search</li>
            </ul>
          </nav>
          <button className="navButton">Favorites</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
