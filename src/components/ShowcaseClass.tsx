import React from "react";
import { STYLES } from "../styles";

type ShowcaseClassProp = {
  imageUrl: string;
  title: string;
  titleInfo: string;
};

const ShowcaseClass = ({ imageUrl, title, titleInfo }: ShowcaseClassProp) => {
  return (
    <div className="relative w-full flex flex-col md:flex-row md:items-center gap-[20px] mt-[40px]">
      <div className="flex-1 relative">
        <img
          src={imageUrl}
          alt={title}
          className="min-h-[400px] h-full w-full object-cover "
        />
        <div className="onImage-blackBg-color absolute top-0 left-0 px-[20px] py-[10px] text-hilightColor font-bold rounded-br-lg text-[17px]">
          {title}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-white text-[30px]">About {title}</h3>
        <p className={`${STYLES.letter} mt-[10px]`}>{titleInfo}</p>
        <button className={`${STYLES.button}  w-[50%] mt-[30px]`}>
          View {title} Classes
        </button>
      </div>
    </div>
  );
};

export default ShowcaseClass;
