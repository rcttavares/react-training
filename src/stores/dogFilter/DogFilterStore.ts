import { createStore } from "effector";
import { cloneDeep } from "lodash";
import { DogFilterEvent } from "./DogFilterEvent";
import { DogFilterState } from "./DogFilterState";

const initialState: DogFilterState = {
  dogFilter: "",
};

export const DogFilterStore = createStore<DogFilterState>(initialState).on(
  DogFilterEvent,
  (state, dogFilter) =>
    cloneDeep({
      ...state,
      ...dogFilter,
    })
);
