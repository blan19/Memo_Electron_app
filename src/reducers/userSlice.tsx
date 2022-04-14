import { IStrapiUser } from "@/types/user.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserType {
  isLogin: boolean;
  user: IStrapiUser;
}

const initialState: UserType = {
  isLogin: false,
  user: {
    email: "",
    username: "",
  },
};

export const userSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    resetUser: (state) => ({
      ...state,
      isLogin: false,
      user: { email: "", username: "" },
    }),
    setCurrentUser: (state, action: PayloadAction<IStrapiUser>) => ({
      ...state,
      isLogin: true,
      user: action.payload,
    }),
  },
});

export const { resetUser, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
