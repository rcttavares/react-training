import { createStore } from "effector";
import { cloneDeep } from "lodash";
import { setLoading } from "./LoaderEvent";
import LoaderState from "./LoaderState";

const initialState: LoaderState = {
  loading: false,
};

const LoaderStore = createStore<LoaderState>(initialState).on(
  setLoading,
  (state, loading) =>
    cloneDeep({
      ...state,
      ...loading,
    })
);

export default LoaderStore;
