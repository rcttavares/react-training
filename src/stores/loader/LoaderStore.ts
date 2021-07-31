import { createStore } from "effector";
import { cloneDeep } from "lodash";
import { LoaderEvent } from "./LoaderEvent";
import { LoaderState } from "./LoaderState";

const initialState: LoaderState = {
  isLoading: false,
};

export const LoaderStore = createStore<LoaderState>(initialState).on(
  LoaderEvent,
  (state, isLoading) =>
    cloneDeep({
      ...state,
      ...isLoading,
    })
);
