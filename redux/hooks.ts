import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useReduxDispatch: () => AppDispatch = useDispatch
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector