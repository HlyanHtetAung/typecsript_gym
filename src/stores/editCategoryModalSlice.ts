import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

// Define a type for the slice state
interface CategoryType {
  prevCategoryName: string;
  prevCategoryId: number;
  openEditCategoryModal: boolean;
  changed: boolean;
}

// Define the initial state using that type
const initialState: CategoryType = {
  openEditCategoryModal: false,
  prevCategoryName: '',
  prevCategoryId: 0,
  changed: false,
};

export const prevCategorySlice = createSlice({
  name: 'editCategory',
  initialState,
  reducers: {
    openCategoryModal: (state, action: PayloadAction<any>) => {
      const { id, name } = action.payload;
      state.openEditCategoryModal = true;
      state.prevCategoryId = id;
      state.prevCategoryName = name;
    },
    closeCategoryModal: (state) => {
      state.openEditCategoryModal = false;
      state.prevCategoryId = 0;
      state.prevCategoryName = '';
    },
  },
});

export const { openCategoryModal, closeCategoryModal } =
  prevCategorySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPrevCategoryName = (state: RootState) =>
  state.editCategory.prevCategoryName;
export const selectPrevCategoryId = (state: RootState) =>
  state.editCategory.prevCategoryId;

export default prevCategorySlice.reducer;
