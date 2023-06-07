import { useState } from 'react';
import EditModal from './EditModal';
import InputBoxTag from './InputBoxTag';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import {
  closeCategoryModal,
  selectPrevCategoryId,
  selectPrevCategoryName,
} from '../stores/editCategoryModalSlice';
import { RootState } from '../stores/store';
import { useGetCategories } from '../customHooks';

const EditCategoryModal = () => {
  const [categoryInput, setCategoryInput] = useState<string>('');
  const prevCategoryName = useAppSelector(selectPrevCategoryName);
  const prevCategoryId = useAppSelector(selectPrevCategoryId);
  const { setCategories } = useGetCategories();
  const dispatch = useAppDispatch();
  const editCategoryHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(
      `${
        import.meta.env.VITE_HOST_URL
      }/category/update/${prevCategoryId}?title=${categoryInput}`
    );
    const data = await res.json();
    setCategories((prev: any) => [...prev]);
    dispatch(closeCategoryModal());
  };

  const closeModal = () => {
    dispatch(closeCategoryModal());
  };

  return (
    <EditModal
      buttonName="Edit"
      header="Edit Category"
      onClick={editCategoryHandle}
      closeModalFunc={closeModal}
    >
      <p className="">Previous Value</p>
      <InputBoxTag
        value={prevCategoryName}
        placholder="Edit Category.."
        disableInput
      />
      <p className="">New Value</p>
      <InputBoxTag
        value={categoryInput}
        setValue={setCategoryInput}
        placholder="Enter new value.."
      />
    </EditModal>
  );
};

export default EditCategoryModal;
