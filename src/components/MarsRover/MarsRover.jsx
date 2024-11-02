import MarsChildTabs from "../MarsChildTabs/MarsChildTabs";
import TitleHead from "../TitleHead/TitleHead";

const MarsRover = () => {
  return (
    <>
      <div className="container px-5 mx-auto py-28">
        <TitleHead
          title={"Mars Rover Photos"}
          subtitle={
            "Exploring Mars, One Photo at a Time. Discover the awe-inspiring beauty and intriguing secrets of the Red Planet as captured by our courageous rovers."
          }
        />
        <MarsChildTabs />
        <div
          id="container"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        ></div>
      </div>
    </>
  );
};

export default MarsRover;
