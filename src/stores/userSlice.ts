import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserTypes = {
  userData: any;
};

const initialState: UserTypes = {
  userData: null,
};

export const userSlice: any = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<any>) => {
      const { data } = action.payload;
      state.userData = data;
    },
    addBookedClassToUserAccount: (state, action: PayloadAction<any>) => {
      const { data } = action.payload;
      if (state.userData) {
        state.userData.booked_classes = [
          ...state.userData.booked_classes,
          data,
        ];
      }
    },
    removeBookedClassFromUserAccount: (state, action: PayloadAction<any>) => {
      const copiedBookedClasses = [...state.userData.booked_classes];
      const { id, date } = action.payload;
      const toDelteBookedClassIndex = copiedBookedClasses.findIndex(
        (copBk_class: any) =>
          copBk_class.class_id === id && copBk_class.class_date === date
      );
      copiedBookedClasses.splice(toDelteBookedClassIndex, 1);
      state.userData.booked_classes = copiedBookedClasses;
    },
    reducePointOnBook: (state, action: PayloadAction<any>) => {
      const { packageId } = action.payload;
      const copiedPointsAry = [...state.userData.currentPointsAry];
      // const toUpdateIndex = copiedPointsAry.findIndex((pack : any)=> pack.packged_id === packageId);

      const updatedPointsAry = copiedPointsAry.map((pointAry: any) =>
        pointAry.package_id.toString() === packageId
          ? { ...pointAry, currentPoints: pointAry.currentPoints - 1 }
          : pointAry
      );
      state.userData.currentPointsAry = updatedPointsAry;
    },
    addPointOnUnBook: (state, action: PayloadAction<any>) => {
      const { packageId } = action.payload;
      const copiedPointsAry = [...state.userData.currentPointsAry];
      // const toUpdateIndex = copiedPointsAry.findIndex((pack : any)=> pack.packged_id === packageId);

      const updatedPointsAry = copiedPointsAry.map((pointAry: any) =>
        pointAry.package_id.toString() === packageId
          ? { ...pointAry, currentPoints: pointAry.currentPoints + 1 }
          : pointAry
      );
      state.userData.currentPointsAry = updatedPointsAry;
    },
  },
});

export const {
  setUserData,
  addBookedClassToUserAccount,
  removeBookedClassFromUserAccount,
  reducePointOnBook,
  addPointOnUnBook,
} = userSlice.actions;

export default userSlice.reducer;
