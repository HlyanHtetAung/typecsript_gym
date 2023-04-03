import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userSlice: any = createSlice({
  name: 'user',
  initialState: {
    userData: null,
  },
  reducers: {
    setUserData: (state, action: PayloadAction<any>) => {
      const { data } = action.payload;
      state.userData = data;
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
