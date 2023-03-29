import { useState } from 'react';
import InputBoxTag from '../components/InputBoxTag';
import { STYLES } from '../styles';

const CreateCategory = () => {
  const [categoryInput, setCategoryInput] = useState<string | ''>('');

  const createPlanHandle = () => {
    fetch(`${import.meta.env.VITE_HOST_URL}/category/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ categoryInput }),
    });
    setCategoryInput('');
  };

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
        <InputBoxTag
          value={categoryInput}
          setValue={setCategoryInput}
          placholder="Enter Category.."
        />
        <button
          onClick={createPlanHandle}
          className="w-full bg-primary py-[10px] rounded-md font-poppins font-bold text-secondary"
        >
          Create Category
        </button>
      </div>
    </div>
  );
};

export default CreateCategory;
