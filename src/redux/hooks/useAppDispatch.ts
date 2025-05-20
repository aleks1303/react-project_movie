import {useDispatch} from "react-redux";
import {store} from "../store/store.tsx";

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();