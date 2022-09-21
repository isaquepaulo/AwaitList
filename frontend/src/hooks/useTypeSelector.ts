import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux"
import { RootState } from '../store/store'

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector
