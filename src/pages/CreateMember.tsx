import React from "react";
import { STYLES } from "../styles";

const CreateMember = () => {
  return (
    <div className="w-full">
      <div
        className={`${STYLES.form_max_width} ${STYLES.margin_center} ${STYLES.paddingY} ${STYLES.paddingX} flex flex-col gap-[20px]`}
      >
        <div className="flex items-center justify-between">
          <h3 className={`${STYLES.formHeading}`}>Create Category Form</h3>
          <button className="bg-red-500 py-[6px] px-[10px] rounded-md text-red-900 font-poppins text-[15px]">
            Reset Data
          </button>
        </div>
        <button className="w-full bg-primary py-[10px] rounded-md font-poppins font-bold text-secondary">
          Create Member
        </button>
      </div>
    </div>
  );
};

export default CreateMember;
