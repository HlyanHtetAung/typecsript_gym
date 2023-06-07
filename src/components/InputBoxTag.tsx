import React from 'react';

type inputBoxTagProp = {
  value: string;
  setValue?: (value: string) => void;
  placholder?: string;
  numberInput?: boolean;
  disableInput?: boolean;
};

const InputBoxTag = ({
  value,
  setValue,
  placholder,
  numberInput,
  disableInput,
}: inputBoxTagProp) => {
  return (
    <div className="py-[10px] px-[10px] rounded-md bg-secondary">
      <input
        disabled={disableInput}
        onChange={(e) => (setValue ? setValue(e.target.value) : null)}
        value={value}
        type={numberInput ? 'number' : 'text'}
        className="w-full outline-none bg-transparent text-white"
        placeholder={placholder}
      />
    </div>
  );
};

export default InputBoxTag;
