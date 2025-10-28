import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import { DispatchType, IRootState } from '@/store/index'

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
