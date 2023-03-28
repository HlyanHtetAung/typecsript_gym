import { Link } from 'react-router-dom';
import { STYLES } from '../styles';

type ShowcaseClassProp = {
  imageUrl: string;
  title: string;
  titleInfo: string;
  classDetailPath: string;
};

const ShowcaseClass = ({
  imageUrl,
  title,
  titleInfo,
  classDetailPath,
}: ShowcaseClassProp) => {
  return (
    <div className="relative w-full flex flex-col md:flex-row md:items-center gap-[20px] mt-[40px]">
      <div className="flex-1 relative">
        <img
          src={imageUrl}
          alt={title}
          className="h-[350px] sm:max-h-[600px] h-full w-full object-cover "
        />
        <div className="onImage-blackBg-color absolute top-0 left-0 px-[20px] py-[10px] text-hilightColor font-bold rounded-br-lg text-[17px]">
          {title}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-white text-[30px]">About {title}</h3>
        <p className={`${STYLES.letter} mt-[10px]`}>{titleInfo}</p>
        <Link to={classDetailPath}>
          <button className={`${STYLES.button}  w-[50%] mt-[30px]`}>
            View {title} Classes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShowcaseClass;
