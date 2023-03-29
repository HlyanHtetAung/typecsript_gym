import React from 'react';

type inputBoxTagProp = {
  value: string;
  setValue: (value: string) => void;
  placholder?: string;
};

const InputBoxTag = ({ value, setValue, placholder }: inputBoxTagProp) => {
  return (
    <div className="py-[10px] px-[10px] rounded-md bg-secondary">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        className="w-full outline-none bg-transparent text-white"
        placeholder={placholder}
      />
    </div>
  );
};

export default InputBoxTag;
