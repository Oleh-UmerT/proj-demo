import { allActions } from "@/store/actions";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "./useAppSelector";

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(allActions, dispatch);
};