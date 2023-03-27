import { useEffect, useState } from "react";
import { STYLES } from "../styles";

type TrainerProps = {
  trainerName: string;
  trainerPhotoUrl: string;
};

const Trainer = ({ trainerName, trainerPhotoUrl }: TrainerProps) => {
  // const [image, setImage] = useState("");

  // useEffect(()=> {
  //   const fetchImage = async () => {
  //     const response = await import(trainerPhotoUrl); // change relative path to suit your needs
  //     setImage(response.default);
  // }
  // fetchImage();  
  // },[]);

  return (
    <div className="relative h-[400px] drop-shadow-lg cursor-pointer overflow-hidden">
      <img
        src={`https://drive.google.com/uc?export=view&id=${trainerPhotoUrl}`}
        alt={trainerName}
        className="w-full h-full object-cover hover:scale-110 duration-200"
      />
      <div className="absolute bottom-0 left-0 w-full onImage-blackBg-color flex justify-between px-[20px] py-[10px]">
        <p className={`${STYLES.letter} font-semibold text-white`}>{trainerName}</p>

      </div>
    </div>
  );
};

export default Trainer;
