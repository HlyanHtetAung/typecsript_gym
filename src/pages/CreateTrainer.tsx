import React, { useState } from "react";
import InputBoxTag from "../components/InputBoxTag";
import { STYLES } from "../styles";

// about
// name
// image

const CreateTrainer = () => {
  const [trainerName, setTrainerName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [trainerImage, setTrainerImage] = useState("");
  const [trainerImageFile, setTrainerImageFile] = useState<File | null>(null);

  const selectImageHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setTrainerImage(url);
      setTrainerImageFile(file);
    }
  };

  const removeImageHandle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setTrainerImage("");
    setTrainerImageFile(null);
  };

  const createTrainerHandle = () => {
    const formData = new FormData();

    if (trainerImageFile) {
      formData.append("file", trainerImageFile);
    }
    formData.append("name", trainerName);
    formData.append("about", description);
  };

  return (
    <div className="w-full">
      <div
        className={`${STYLES.form_max_width} ${STYLES.margin_center} ${STYLES.paddingY} ${STYLES.paddingX} flex flex-col gap-[20px]`}
      >
        <div className="flex items-center justify-between">
          <h3 className={`${STYLES.formHeading}`}>Create Trainer Form</h3>
          <button className="bg-red-500 py-[6px] px-[10px] rounded-md text-red-900 font-poppins text-[15px]">
            Reset Data
          </button>
        </div>
        <InputBoxTag
          setValue={setTrainerName}
          value={trainerName}
          placholder="Enter Trainer name..."
        />
        <InputBoxTag
          setValue={setDescription}
          value={description}
          placholder="Enter Description..."
        />

        {trainerImage ? (
          <div className="relative w-full h-[400px]">
            <img src={trainerImage} className="w-full h-full object-cover" />
            <button
              className="absolute top-0 right-0 bg-red-700 px-[20px] py-[10px] text-white"
              onClick={(e) => removeImageHandle(e)}
            >
              Remove
            </button>
          </div>
        ) : (
          <input
            type="file"
            accept="image/*"
            onChange={(e) => selectImageHandle(e)}
          />
        )}
        <button
          className="w-full bg-primary py-[10px] rounded-md font-poppins font-bold text-secondary"
          onClick={createTrainerHandle}
        >
          Create Trainer
        </button>
      </div>
    </div>
  );
};

export default CreateTrainer;
