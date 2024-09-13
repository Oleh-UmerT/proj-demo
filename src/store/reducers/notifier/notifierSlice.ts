import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast, ToastItem } from "react-toastify";

export interface NotifierState {
  notifications: ToastItem[];
}

const initialState: NotifierState = {
  notifications: [],
};

export const notifierSlice = createSlice({
  name: "@notifier",
  initialState,
  reducers: {
    notifyError(state, action: PayloadAction<any>) {
      toast.error(action.payload, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    notifySuccess(state, action: PayloadAction<any>) {
      toast.success(action.payload, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    notifyWarning(state, action: PayloadAction<any>) {
      toast.warning(action.payload, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    closeToast(state, action: PayloadAction<number>) {
      toast.done(action.payload);
    },
  },
});

export const notifierReducer = notifierSlice.reducer;
export const notifierActions = notifierSlice.actions;