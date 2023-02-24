import React from "react";

type inputBoxTagProp = {
  value: string;
  setValue: (value: string) => void;
};

const InputBoxTag = ({ value, setValue }: inputBoxTagProp) => {
  return (
    <div className="py-[10px] px-[10px] rounded-md bg-secondary">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        className="w-full outline-none bg-transparent text-white"
        placeholder="Enter Plan to create ..."
      />
    </div>
  );
};

export default InputBoxTag;
