import { HomePageClassTypes } from "../components";
import { STYLES } from "../styles";

const Home = () => {
  return (
    <div className="w-full">
      <div
        className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingY}`}
      >
        {/* Hero Section */}
        {/* Class Types pliates can provide */}
        <HomePageClassTypes />
        {/* Trainers Section */}
      </div>
    </div>
  );
};

export default Home;
