import { createStore } from "effector";
import { cloneDeep } from "lodash";
import { setDogFilter } from "./DogFilterEvent";
import DogFilterState from "./DogFilterState";

const initialState: DogFilterState = {
  dogFilter: "",
};

const DogFilterStore = createStore<DogFilterState>(initialState).on(
  setDogFilter,
  (state, dogFilter) =>
    cloneDeep({
      ...state,
      ...dogFilter,
    })
);

export default DogFilterStore;
