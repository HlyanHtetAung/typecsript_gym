import React from "react";
import { STYLES } from "../styles";

type TrainerProps = {
  trainerName: string;
  trainerPhotoUrl: string;
  classType: string;
};

const Trainer = ({ trainerName, trainerPhotoUrl, classType }: TrainerProps) => {
  return (
    <div className="relative h-[400px] drop-shadow-lg cursor-pointer overflow-hidden">
      <img
        src={trainerPhotoUrl}
        alt={trainerName}
        className="w-full h-full object-cover hover:scale-110 duration-200"
      />
      <div className="absolute bottom-0 left-0 w-full onImage-blackBg-color flex justify-between px-[20px] py-[10px]">
        <p className={`${STYLES.letter} font-semibold`}>{trainerName}</p>
        <h3 className="text-hilightColor text-[17px] font-bold">{classType}</h3>
      </div>
    </div>
  );
};

export default Trainer;
